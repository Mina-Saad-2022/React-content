import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import import_export from "./components/modern_js/import&export";
import {
  spread,
  Origin,
  data,
  add_data,
} from "./components/modern_js/spread_operators";
import { first, second, third } from "./components/modern_js/Destructuring";
import {
  getUserData,
  createUserData,
} from "./components/modern_js/primitive_type";
import { array, array_map } from "./components/modern_js/array_map";
import {
  getLetters,
  getFromIndexTwo,
  getFirstTwoLetters,
  getLetterAtIndexTwo,
  getLastTwoLetters,
  getMiddleLetters,
  getAllLetters,
} from "./components/modern_js/methodes_array/slice";
import {
  reverse_getLetters,
  reverse_getLetters_test,
} from "./components/modern_js/methodes_array/reverse";
import {
  arra_concat,
  array_one,
  array_two,
} from "./components/modern_js/methodes_array/concat";
import {
  joinNumberArrayWithComma,
  getNumberArray,
} from "./components/modern_js/methodes_array/join";
import {
  data_filter,
  filterNumbersEqualToTwo,
  filterNumbersGreaterThanTwo,
  filterNumbersLessThanTwo,
} from "./components/modern_js/methodes_array/filter";
import {
  difference_array,
  division_array,
  multiplication_array,
  reduce_data,
  sum_array,
} from "./components/modern_js/methodes_array/reduce";
import {
  generateNumberArray,
  findFirstNumberGreaterThanTwo,
} from "./components/modern_js/methodes_array/find";
import {
  createNumberList,
  sortNumbersAscending,
  sortNumbersDescending,
} from "./components/modern_js/methodes_array/sort";
import {
  capital_letter,
  small_letter,
} from "./components/modern_js/higher_order_function";

function App() {
  const { id, name } = data();
  const { age } = add_data();
  const primitive_old_data = getUserData();
  const primitive_new_data = createUserData();
  const capital = small_letter();

  return (
    <div className="App">
      <div className="container-fluid">
        <header className="App-header border m-2 p-3">
          <h2 className="p-2 font-bold myText">modern javaScript :</h2>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col md={3} sm={12}>
                <Nav variant="pills" className="flex-column col-10 border p-2">
                  <Nav.Item>
                    <Nav.Link eventKey="first">import & export</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Spread operators</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Destructuring</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">array map</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="primitive type">primitive type</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="array methods">array methods</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="higher order function">higher order function</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col md={9} sm={12}>
                <Tab.Content className="border p-2">
                  {/*  import export */}
                  <Tab.Pane eventKey="first">{import_export()}</Tab.Pane>
                  {/*  Spread operators */}
                  <Tab.Pane eventKey="second">
                    <ul>
                      <li>the number Origin is : {Origin()}</li>
                      <ol className="text-danger">
                        the spread operators is Adding other data to the original content {spread()}
                      </ol>
                      <li>
                        I can use it within the object to add to existing data or modify it
                      </li>
                      <ol>ID :{id}</ol>
                      <ol>Name : {name}</ol>
                      <ol className="text-danger">the new data is Age : {age}</ol>
                    </ul>
                  </Tab.Pane>
                  {/* Destructuring */}
                  <Tab.Pane eventKey="third">
                    <ul>
                      <ol>the origin data is {first()}</ol>
                      <ol>
                        when i type [des] the result =
                        <span className="text-danger">{second()}</span>
                      </ol>
                      <ol>
                        when i type [ , , des] the result =
                        <span className="text-danger">{third()}</span>
                      </ol>
                    </ul>
                  </Tab.Pane>
                  {/* array map */}
                  <Tab.Pane eventKey="fourth">
                    <ul>
                      <li>the origin data is : {array()}</li>
                      <li>
                        the array map + 1 =
                        <span className="text-danger">{array_map()}</span>
                      </li>
                    </ul>
                  </Tab.Pane>
                  {/* primitive type */}
                  <Tab.Pane eventKey="primitive type">
                    <ul>
                      <li>
                        the origin data is name :
                        <span className="text-danger">{primitive_old_data.name}</span>
                      </li>
                      <li>
                        after i use primitive type i change the data is name :
                        <span className="text-danger">{primitive_new_data.name}</span>
                      </li>
                    </ul>
                  </Tab.Pane>
                  {/* array methods */}
                  <Tab.Pane eventKey="array methods">
                    <h2 className="p-2 font-bold myText">array methods :</h2>
                    <Tab.Container id="methods-array" defaultActiveKey="slice_test">
                      <Row>
                        <Col md={3} sm={12} className="text-center">
                          <Nav variant="pills" className="flex-column">
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
                        <Col md={9} sm={12}>
                          <Tab.Content>
                            <Tab.Pane eventKey="slice_test">
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
                                    <div>
                                      the method slice(2)
                                      <span className="text-danger">
                                        It starts from the index i chose (2), and the result is: {getFromIndexTwo()}
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      the method slice(-2)
                                      <span className="text-danger">
                                        It get last index i chose (-2), and the result is: {getLastTwoLetters()}
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      the method slice(1,4)
                                      <span className="text-danger">
                                        It starts from the index i chose (1,4), and the result is: {getMiddleLetters()}
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      the method slice()
                                      <span className="text-danger">
                                        It get all index in array, and the result is: {getAllLetters()}
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="reverse_test">
                              <div>
                                <p>the origin data is {reverse_getLetters()}</p>
                                <ul>
                                  <li>
                                    Using the reverse method swaps the first and last elements :
                                    <span className="text-danger">{reverse_getLetters_test()}</span>
                                  </li>
                                </ul>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="concat_test">
                              <div>
                                <h2>array concat</h2>
                                <p>the first array is : {array_one()}</p>
                                <p>the second array is : {array_two()}</p>
                                <p>
                                  <span className="text-danger">array concat : {arra_concat()}</span>
                                </p>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="join_test">
                              <div>
                                <h2>array join</h2>
                                <p>the numbers array is : {getNumberArray()}</p>
                                <p>
                                  <span className="text-danger">the result is : {joinNumberArrayWithComma()}</span>
                                </p>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="filter_test">
                              <div>
                                <h2>array filter</h2>
                                <p>the filter methods :</p>
                                <ul>
                                  <li>
                                    <span className="text-danger">the original data: {data_filter()}</span>
                                  </li>
                                  <li>
                                    <span className="text-danger">numbers equal to 2 : {filterNumbersEqualToTwo()}</span>
                                  </li>
                                  <li>
                                    <span className="text-danger">numbers greater than 2 : {filterNumbersGreaterThanTwo()}</span>
                                  </li>
                                  <li>
                                    <span className="text-danger">numbers less than 2 : {filterNumbersLessThanTwo()}</span>
                                  </li>
                                </ul>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="reduce_test">
                              <div>
                                <h2>array reduce</h2>
                                <p>the original data : {sum_array()}</p>
                                <p>
                                  the result is :
                                  <span className="text-danger">{reduce_data()}</span>
                                </p>
                                <p>
                                  division array :<span className="text-danger">{division_array()}</span>
                                </p>
                                <p>
                                  multiplication array :<span className="text-danger">{multiplication_array()}</span>
                                </p>
                                <p>
                                  difference array :<span className="text-danger">{difference_array()}</span>
                                </p>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="find_test">
                              <div>
                                <h2>array find</h2>
                                <p>the first number greater than 2: {findFirstNumberGreaterThanTwo()}</p>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="sort_test">
                              <div>
                                <h2>array sort</h2>
                                <p>the original data : {createNumberList()}</p>
                                <p>the sorted data ascending : {sortNumbersAscending()}</p>
                                <p>the sorted data descending : {sortNumbersDescending()}</p>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </Tab.Pane>
                  {/* higher order function */}
                  <Tab.Pane eventKey="higher order function">
                    <h2>higher order function</h2>
                    <p>the small letter is : {capital}</p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </header>
      </div>
    </div>
  );
}

export default App;
