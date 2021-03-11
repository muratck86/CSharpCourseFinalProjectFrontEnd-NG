import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryListModel extends ResponseModel{
    data:Category[]
}
