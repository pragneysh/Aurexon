import { spawn } from 'child_process';
import fs from 'fs';

const script = process.argv[2];
if (!script) {
  console.error('Error: Please specify a shell script to run.');
  process.exit(1);
}

const scriptArgs = process.argv.slice(3);

let bashPath = 'bash';
if (process.platform === 'win32') {
  const candidatePaths = [
    'C:\\Program Files\\Git\\bin\\bash.exe',
    'C:\\Program Files\\Git\\usr\\bin\\bash.exe',
    'C:\\Program Files (x86)\\Git\\bin\\bash.exe',
    (process.env.LOCALAPPDATA || '') + '\\Programs\\Git\\bin\\bash.exe',
    (process.env.PROGRAMFILES || 'C:\\Program Files') + '\\Git\\bin\\bash.exe',
  ];

  for (const p of candidatePaths) {
    if (p && fs.existsSync(p)) {
      bashPath = p;
      break;
    }
  }
}

const child = spawn(bashPath, [script, ...scriptArgs], {
  stdio: 'inherit',
  env: process.env,
});

child.on('error', (err) => {
  console.error(`Failed to launch shell: ${err.message}`);
  process.exit(1);
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 0);
  }
});
