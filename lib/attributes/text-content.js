"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3_interpolate_1 = require("d3-interpolate");
class TextContent {
    static escapeHtml(html) {
        return html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    constructor(str) {
        if (typeof str === "string") {
            this._cb = () => str;
        }
        else {
            this._cb = str;
        }
    }
    toString() {
        return this._cb();
    }
    parse(css) {
        return new TextContent(css || "");
    }
    get(element, attr) {
        return this.parse(element.textContent);
    }
    set(element, attr, override) {
        element.textContent = TextContent.escapeHtml(this._cb());
    }
    interpolator(from) {
        const func = d3_interpolate_1.interpolate(from.toString(), this.toString());
        return (t) => this.parse(func(t));
    }
}
exports.TextContent = TextContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jb250ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F0dHJpYnV0ZXMvdGV4dC1jb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTZDO0FBRzdDLE1BQWEsV0FBVztJQUNkLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBWTtRQUNwQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBSUQsWUFBWSxHQUE0QjtRQUN0QyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztTQUN0QjthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDaEI7SUFDSCxDQUFDO0lBQ00sUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDTSxLQUFLLENBQUMsR0FBa0I7UUFDN0IsT0FBTyxJQUFJLFdBQVcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNNLEdBQUcsQ0FBK0IsT0FBbUIsRUFBRSxJQUFPO1FBQ25FLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNNLEdBQUcsQ0FBK0IsT0FBbUIsRUFBRSxJQUFPLEVBQUUsUUFBc0I7UUFDM0YsT0FBTyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDTSxZQUFZLENBQUMsSUFBaUI7UUFDbkMsTUFBTSxJQUFJLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUE5QkQsa0NBOEJDIn0=