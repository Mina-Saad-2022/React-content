import { Col, Nav, Row, Tab } from "react-bootstrap";
import {
  getAllLetters,
  getFromIndexTwo,
  getLastTwoLetters,
  getLetters,
  getMiddleLetters,
} from "./slice";
import { reverse_getLetters, reverse_getLetters_test } from "./reverse";
import { arra_concat, array_one, array_two } from "./concat";
import { getNumberArray, joinNumberArrayWithComma } from "./join";
import {
  data_filter,
  filterNumbersEqualToTwo,
  filterNumbersGreaterThanTwo,
  filterNumbersLessThanTwo,
} from "./filter";
import {
  difference_array,
  division_array,
  multiplication_array,
  reduce_data,
  sum_array,
} from "./reduce";
import { findFirstNumberGreaterThanTwo, generateNumberArray } from "./find";
import {
  createNumberList,
  sortNumbersAscending,
  sortNumbersDescending,
} from "./sort";

const function_array_methodes = () => {
  return (
    <div>
      <h2 className="p-2 font-bold myText">array methods :</h2>
      <Tab.Container id="methods-array" defaultActiveKey="slice_test">
        <Row>
          <Col md={2} sm={12} className="text-center">
            <Nav variant="pills" className="flex-column p-1 border">
              <Nav.Item>
                <Nav.Link eventKey="slice_test">slice</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reverse_test">reverse</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="concat_test">concat</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="join_test">join</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="filter_test">filter</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reduce_test">reduce</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="find_test">find</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sort_test">sort</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={10} sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="slice_test">
                <h2>array slice</h2>
                <p className="font_arabic">
                  من مكان لمكان من غير متعدل عليه array وظيفتها انها بتاخد جزء
                  من ال{" "}
                </p>
                <div>the origin method is {getLetters()}</div>
                <div>
                  <p>A =0</p>
                  <p>B = 1</p>
                  <p>C = 2</p>
                  <p>D = 3</p>
                  <p>E = 4</p>
                </div>
                <div>
                  <ul>
                    <li>
                      the method slice(2)
                      <span className="text-danger">
                        It starts from the index i chose (2), and the result is:{" "}
                        {getFromIndexTwo()}
                      </span>
                    </li>
                    <li>
                      the method slice(-2)
                      <span className="text-danger">
                        It get last index i chose (-2), and the result is:{" "}
                        {getLastTwoLetters()}
                      </span>
                    </li>
                    <li>
                      the method slice(1,4)
                      <span className="text-danger">
                        It starts from the index i chose (1,4), and the result
                        is: {getMiddleLetters()}
                      </span>
                    </li>
                    <li>
                      the method slice()
                      <span className="text-danger">
                        It get all index in array, and the result is:{" "}
                        {getAllLetters()}
                      </span>
                    </li>
                  </ul>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="reverse_test">
                <h2>array reverse</h2>

                <p className="font_arabic">
                  array وظيفتها انها بتقلب ترتيب عناصر ال
                </p>
                <div>
                  <p>the origin data is {reverse_getLetters()}</p>
                  <ul>
                    <li>
                      Using the reverse method swaps the first and last elements
                      :
                      <span className="text-danger">
                        {reverse_getLetters_test()}
                      </span>
                    </li>
                  </ul>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="concat_test">
                <h2>array concat</h2>
                <p className="font_arabic">
                  تانية جديدة array في array وظيفتها انها بتجمع بين اتنين أو
                  أكتر من الـ
                </p>
                <div>
                  <p>the first array is : {array_one()}</p>
                  <p>the second array is : {array_two()}</p>
                  <p>
                    <span className="text-danger">
                      array concat : {arra_concat()}
                    </span>
                  </p>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="join_test">
                <div>
                  <h2>array join</h2>
                  <p className="font_arabic">
                    وبتفصل مابينهم باستخدام فاصل معين string مع بعض في array هي
                    انها بتجمع عناصر ال join وظيفة ال{" "}
                  </p>
                  <p>the numbers array is : {getNumberArray()}</p>
                  <p>
                    <span className="text-danger">
                      the result is : {joinNumberArrayWithComma()}
                    </span>
                  </p>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="filter_test">
                <h2>array filter</h2>

                <p className="font_arabic">
                  array وظيفتها انها بتختار العناصر اللي بتطابق شرط معين من الـ
                </p>
                <div>
                  <p>the filter methods :</p>
                  <ul>
                    <li>
                      <span className="text-danger">
                        the original data: {data_filter()}
                      </span>
                    </li>
                    <li>
                      <span className="text-danger">
                        numbers equal to 2 : {filterNumbersEqualToTwo()}
                      </span>
                    </li>
                    <li>
                      <span className="text-danger">
                        numbers greater than 2 : {filterNumbersGreaterThanTwo()}
                      </span>
                    </li>
                    <li>
                      <span className="text-danger">
                        numbers less than 2 : {filterNumbersLessThanTwo()}
                      </span>
                    </li>
                  </ul>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="reduce_test">
                <h2>array reduce</h2>
                <p className="font_arabic">
                  لقيمة واحدة باستخدام دالة معينة array وظيفتها انها بتجمع أو
                  تختصر عناصر الـ
                </p>
                <div>
                  <p>the original data : {reduce_data()}</p>
                  <p>
                    the result is + :
                    <span className="text-danger">{sum_array()}</span>
                  </p>
                  <p>
                    difference array -:
                    <span className="text-danger">{difference_array()}</span>
                  </p>
                  <p>
                    multiplication array * :
                    <span className="text-danger">
                      {multiplication_array()}
                    </span>
                  </p>
                  <p>
                    division array / :
                    <span className="text-danger">{division_array()}</span>
                  </p>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="find_test">
                <h2>array find</h2>
                <p className="font_arabic">
                  وظيفتها انها بتدور وترجع أول عنصر يطابق الشرط اللي بتحطه
                </p>
                <div>
                  <p>the origin data is : {generateNumberArray()}</p>
                  <p>
                    the first number greater than 2:{" "}
                    {findFirstNumberGreaterThanTwo()}
                  </p>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="sort_test">
                <h2>array sort</h2>
                <p className="font_arabic">
                  ترتيب معين، سواء تصاعدي أو تنازلي array وظيفتهاانها بترتب
                  عناصر ال
                </p>
                <div>
                  <p>the original data : {createNumberList()}</p>
                  <p>the sorted data ascending : {sortNumbersAscending()}</p>
                  <p>the sorted data descending : {sortNumbersDescending()}</p>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export { function_array_methodes };
