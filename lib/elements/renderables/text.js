"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dimension_1 = require("../../attributes/dimension");
const point_1 = require("../../attributes/point");
const text_content_1 = require("../../attributes/text-content");
const renderable_1 = require("../renderable");
class TextSpan extends renderable_1.AbstractRenderable {
    constructor(context, attrs) {
        super(context, "tspan", attrs);
    }
    get computedLength() {
        return this._node.getComputedTextLength();
    }
}
exports.TextSpan = TextSpan;
function _attributeHelper(a1, a2) {
    return (a1 instanceof point_1.Point) ? { "x:y": a1 } : { x: a1, y: a2 };
}
class Text extends renderable_1.AbstractRenderable {
    constructor(context, content, a1, a2) {
        super(context, "text", _attributeHelper(a1, a2));
        if (content) {
            this.addSpan(content);
        }
    }
    addSpan(content, lineHeight, update = true) {
        const span = new TextSpan(this.context);
        span.setAttribute("textContent", new text_content_1.TextContent(content));
        if (lineHeight) {
            span.setAttribute("x", parseFloat(this.getAttribute("x") || "0"));
            if (typeof lineHeight === "number") {
                span.setAttribute("dy", new dimension_1.Dimension(lineHeight, "em"));
            }
            else {
                span.setAttribute("dy", lineHeight);
            }
        }
        this.add(span);
        return span;
    }
    get computedLength() {
        return this._node.getComputedTextLength();
    }
}
exports.Text = Text;
class MultilineText extends Text {
    constructor(context, text, width, attrs) {
        super(context, "", attrs["x:y"] || attrs.x, attrs.y);
        const temp = new Text(context, "", attrs["x:y"] || attrs.x, attrs.y);
        temp.setAttribute("opacity", 0);
        const span = new TextSpan(context, attrs);
        temp.add(span);
        const lines = [""];
        text.split(" ").forEach((word, i) => {
            const line = lines[lines.length - 1];
            const newLine = (line.length === 0) ? word : `${line} ${word}`;
            const lineContent = new text_content_1.TextContent(newLine);
            span.setAttribute("textContent", lineContent);
            if (span.computedLength > width && line.length > 0) {
                lines.push(word);
            }
            else {
                lines[lines.length - 1] = newLine;
            }
        });
        lines.forEach(line => {
            if (line.length > 0) {
                this.addSpan(line, 1);
            }
        });
    }
}
exports.MultilineText = MultilineText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy90ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMERBQXVEO0FBQ3ZELGtEQUErQztBQUMvQyxnRUFBNEQ7QUFFNUQsOENBQStGO0FBOEIvRixNQUFhLFFBQVMsU0FBUSwrQkFBd0Q7SUFDcEYsWUFBWSxPQUFnQixFQUFFLEtBQW9DO1FBQ2hFLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBUEQsNEJBT0M7QUFZRCxTQUFTLGdCQUFnQixDQUFDLEVBQWtCLEVBQUUsRUFBVztJQUN2RCxPQUFPLENBQUMsRUFBRSxZQUFZLGFBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUNsRSxDQUFDO0FBRUQsTUFBYSxJQUFLLFNBQVEsK0JBQW1EO0lBSTNFLFlBQVksT0FBZ0IsRUFBRSxPQUFlLEVBQUUsRUFBa0IsRUFBRSxFQUFXO1FBQzVFLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFDTSxPQUFPLENBQUMsT0FBZSxFQUFFLFVBQTRCLEVBQUUsU0FBa0IsSUFBSTtRQUNsRixNQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMs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