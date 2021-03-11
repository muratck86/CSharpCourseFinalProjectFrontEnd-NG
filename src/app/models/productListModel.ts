import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductListModel extends ResponseModel{
    data:Product[]

}
