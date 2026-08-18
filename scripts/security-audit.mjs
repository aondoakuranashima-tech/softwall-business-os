import {execFileSync} from 'node:child_process';

const args = ['audit', '--prod', '--audit-level', 'high'];
try {
  execFileSync('pnpm', args, {stdio:'inherit'});
} catch (error) {
  console.error('Softwall security audit failed. Review high/critical dependency advisories before release.');
  process.exit(typeof error?.status === 'number' ? error.status : 1);
}
