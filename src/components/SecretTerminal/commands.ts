import {
  TerminalCommandContext,
  TerminalLineKind,
} from './SecretTerminal.types';

const HELP_LINES = [
  'help',
  'whoami',
  'ls',
  'cat secrets.txt',
  'fortune',
  'hack',
  'summon cat',
  'matrix',
  'theme.exe',
  'rm -rf reality',
  'self-destruct',
  'reveal truth',
  'coffee',
  'clear',
  'exit',
];

const FAKE_FILES = [
  'secrets.txt',
  'feelings.log',
  'todo_final_v2_REAL.md',
  'moon_mission.sh',
  '.env.but.not.really',
];

const IDENTITIES = [
  'part-time wizard, full-time div wrapper',
  'senior button aligner',
  'local cryptid with TypeScript opinions',
  'unlicensed animation inspector',
  'frontend mechanic with suspicious shell access',
];

const SECRET_LINES = [
  'the website is held together by vibes',
  'there is no backend here only determination',
  'every bug was once a feature candidate',
  'some spacing decisions were made emotionally',
];

const FORTUNES = [
  'you will center a div today but not emotionally',
  'a mysterious margin will appear and refuse explanation',
  'your next refactor will improve everything except naming',
  'someone will call it simple after three hours of polish',
];

const TRUTHS = [
  'truth: 63% of polish is deleting things',
  'truth: the terminal has no authority here',
  'truth: someone considered making this useful and was stopped',
  'truth: every personal site contains at least one unnecessary decision',
];

const SELF_DESTRUCT_LINES = [
  'github: https://github.com/vorsakha',
  'linkedin: https://www.linkedin.com/in/andreitf/',
  'email: mailto:andreitf.dev@gmail.com',
];

const wait = (ms: number) =>
  new Promise(resolve => {
    window.setTimeout(resolve, ms);
  });

const pick = <T,>(items: T[]) => {
  return items[Math.floor(Math.random() * items.length)];
};

const write = (
  context: TerminalCommandContext,
  lines: string[],
  kind: TerminalLineKind = 'output',
) => {
  context.appendLines(lines, kind);
};

const normalized = (input: string) => input.trim().toLowerCase().replace(/\s+/g, ' ');

export async function runTerminalCommand(
  input: string,
  context: TerminalCommandContext,
) {
  const command = normalized(input);

  if (!command) return;

  if (command === 'help') {
    write(context, HELP_LINES, 'system');
    return;
  }

  if (command === 'whoami') {
    context.appendLine(pick(IDENTITIES));
    return;
  }

  if (command === 'ls') {
    write(context, FAKE_FILES, 'system');
    return;
  }

  if (command === 'cat secrets.txt') {
    context.appendLine(pick(SECRET_LINES));
    return;
  }

  if (command.startsWith('cat ')) {
    write(context, [`no such file: ${command.slice(4)}`], 'error');
    return;
  }

  if (command === 'fortune') {
    context.appendLine(pick(FORTUNES));
    return;
  }

  if (command === 'hack') {
    context.appendLine('initializing breach protocol...', 'system');
    await wait(context.reduceMotion ? 40 : 260);
    context.appendLine('[##........] bypassing ethics layer', 'system');
    await wait(context.reduceMotion ? 40 : 320);
    context.appendLine('[######....] rerouting consequences', 'system');
    await wait(context.reduceMotion ? 40 : 360);
    context.appendLine('[##########] access granted to absolutely nothing');
    return;
  }

  if (command === 'summon cat') {
    context.appendLine('pspspspsps...', 'system');
    await wait(context.reduceMotion ? 40 : 180);
    context.appendLine('/\\_/\\\\\n( o.o )\n > ^ <', 'ascii');
    return;
  }

  if (command === 'matrix') {
    const enabled = context.triggerMatrix();
    write(
      context,
      enabled
        ? ['green channel locked', 'matrix background enabled']
        : ['signal dropped', 'matrix background disabled'],
      'system',
    );
    return;
  }

  if (command === 'theme.exe') {
    const enabled = context.toggleTheme();
    write(
      context,
      [
        enabled
          ? 'amber phosphor mode enabled'
          : 'secret theme disengaged',
      ],
      'system',
    );
    return;
  }

  if (command === 'rm -rf reality') {
    context.triggerRealityGlitch();
    write(context, ['reality destabilized', 'please remain seated']);
    return;
  }

  if (command === 'self-destruct') {
    context.appendLine('3...', 'system');
    await wait(context.reduceMotion ? 60 : 320);
    context.appendLine('2...', 'system');
    await wait(context.reduceMotion ? 60 : 320);
    context.appendLine('1...', 'system');
    await wait(context.reduceMotion ? 60 : 340);
    write(context, ['redirecting to safer options...'], 'system');
    await wait(context.reduceMotion ? 60 : 180);
    write(context, SELF_DESTRUCT_LINES);
    return;
  }

  if (command === 'reveal truth') {
    context.appendLine(pick(TRUTHS));
    return;
  }

  if (command === 'coffee') {
    write(context, ['brewing...', 'java not found. only javascript.']);
    return;
  }

  if (command === 'clear') {
    context.clearHistory();
    return;
  }

  if (command === 'exit') {
    context.appendLine('closing unauthorized interface...', 'system');
    await wait(context.reduceMotion ? 40 : 140);
    context.close();
    return;
  }

  write(
    context,
    [`command not found: ${input.trim()}`, 'type "help" if you insist'],
    'error',
  );
}
