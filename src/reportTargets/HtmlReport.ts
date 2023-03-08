import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlRpeort implements OutputTarget {
	print(report: string): void {
		const html = `
        <div>
            <h1>Analysis Report</h1>
            <p>${report}</p>
        </div>
        `;

		fs.writeFileSync('report.html', html);
	}
}
