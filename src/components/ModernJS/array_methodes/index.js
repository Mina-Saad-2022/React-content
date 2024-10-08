import { Col, Nav, Row, Tab } from "react-bootstrap";
import { useState } from "react";
import {
  getAllLetters,
  getFromIndexTwo,
  getLastTwoLetters,
  getLetters,
  getMiddleLetters,
} from "./slice";
import { reverse_getLetters } from "./reverse";
import { arra_concat, array_one, array_two } from "./concat";
import { getNumberArray, joinNumberArrayWithComma } from "./join";
import { data_filter } from "./filter";
import { reduce_data } from "./reduce";
import { findFirstNumberGreaterThanTwo } from "./find";
import { sortNumbersAscending, sortNumbersDescending } from "./sort";

const function_array_methodes = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchTerm, setSearchTerm] = useState("");

  const tabsData = [
    { eventKey: "slice_test", title: "slice" },
    { eventKey: "reverse_test", title: "reverse" },
    { eventKey: "concat_test", title: "concat" },
    { eventKey: "join_test", title: "join" },
    { eventKey: "filter_test", title: "filter" },
    { eventKey: "reduce_test", title: "reduce" },
    { eventKey: "find_test", title: "find" },
    { eventKey: "sort_test", title: "sort" },
  ];

  // تصفية الـ tabs بناءً على قيمة البحث
  const filteredTabs = tabsData.filter((tab) =>
    tab.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="p-2 font-bold myText">array methods :</h2>
      <input
        type="text"
        placeholder="ابحث عن method هنا..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-3"
      />
      <Tab.Container id="methods-array" defaultActiveKey="slice_test">
        <Row>
          <Col md={2} sm={12} className="text-center">
            <Nav variant="pills" className="flex-column p-1 border">
              {filteredTabs.map((tab) => (
                <Nav.Item key={tab.eventKey}>
                  <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
                </Nav.Item>
              ))}
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
                  <p>A = 0</p>
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
                      the method slice(1, 4)
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

              {/* باقي الـ Tab.Pane بتاع الـ methods */}
              <Tab.Pane eventKey="reverse_test">
                <h2>array reverse</h2>
                <p>{reverse_getLetters()}</p>
              </Tab.Pane>

              <Tab.Pane eventKey="concat_test">
                <h2>array concat</h2>
                <p>{arra_concat(array_one, array_two)}</p>
              </Tab.Pane>

              <Tab.Pane eventKey="join_test">
                <h2>array join</h2>
                <p>{joinNumberArrayWithComma(getNumberArray())}</p>
              </Tab.Pane>

              <Tab.Pane eventKey="filter_test">
                <h2>array filter</h2>
                <p>{data_filter()}</p>
              </Tab.Pane>

              <Tab.Pane eventKey="reduce_test">
                <h2>array reduce</h2>
                <p>{reduce_data()}</p>
              </Tab.Pane>

              <Tab.Pane eventKey="find_test">
                <h2>array find</h2>
                <p>{findFirstNumberGreaterThanTwo()}</p>
              </Tab.Pane>

              <Tab.Pane eventKey="sort_test">
                <h2>array sort</h2>
                <p>{sortNumbersAscending()}</p>
                <p>{sortNumbersDescending()}</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export { function_array_methodes };
