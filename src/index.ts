import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlRpeort } from './reportTargets/HtmlReport';
import { Summary } from './Summary';
import { AverangeGoalsAnalysis } from './analyzers/AverangeGoalsAnalysis';

const matchReader = MatchReader.fromCsv('football.csv');

const summaryWinHtml = new Summary(
	new WinsAnalysis('Man United'),
	new HtmlRpeort()
);
const summaryWinConsole = new Summary(
	new WinsAnalysis('Tottenham'),
	new ConsoleReport()
);

const summaryAverangeConsole = new Summary(
	new AverangeGoalsAnalysis('Chelsea'),
	new ConsoleReport()
);

matchReader.load();
summaryWinHtml.buildAndPrintReport(matchReader.matches);
summaryWinConsole.buildAndPrintReport(matchReader.matches);
summaryAverangeConsole.buildAndPrintReport(matchReader.matches);
