"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analizer, outputTarget) {
        this.analizer = analizer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const report = this.analizer.run(matches);
        this.outputTarget.print(report);
    }
}
exports.Summary = Summary;
