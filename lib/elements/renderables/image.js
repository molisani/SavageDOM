"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const renderable_1 = require("../renderable");
class Image extends renderable_1.AbstractRenderable {
    static afterLoad(context, href, attrs = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const image = new Image(context, attrs);
            const onLoad = image.getEvent("load").toPromise();
            image.setAttribute("href", href);
            yield onLoad;
            return image;
        });
    }
    constructor(context, attrs) {
        super(context, "image", attrs);
    }
}
exports.Image = Image;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvaW1hZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLDhDQUEyRjtBQXFCM0YsTUFBYSxLQUFNLFNBQVEsK0JBQW1FO0lBQ3JGLE1BQU0sQ0FBTyxTQUFTLENBQUMsT0FBZ0IsRUFBRSxJQUFZLEVBQUUsUUFBbUMsRUFBRTs7WUFDakcsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakMsTUFBTSxNQUFNLENBQUM7WUFDYixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7S0FBQTtJQUNELFlBQVksT0FBZ0IsRUFBRSxLQUFpQztRQUM3RCxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFYRCxzQkFXQyJ9