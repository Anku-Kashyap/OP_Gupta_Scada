import "./ZoneWise_Kah.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCheckWorkingURL } from "../../Utils/useCheckWorkingURL";


function ZoneWiseKahrakmaf() {
  const promise_res = useCheckWorkingURL();
  const [Base_Url, setBase_Url] = useState(process.env.REACT_APP_BASE_URL);
  promise_res.then((promiseResult) => {
    setBase_Url(promiseResult);
  });
  const ZONE_1 = useAPi(Base_Url + "zone/101");
  var [date, setDate] = useState(new Date());

  const [allValues, setAllValues] = useState({
    tag0: "",
    tag1: "",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    tag7: "",
    tag8: "",
    tag9: "",
    tag10: "",
    tag11: "",
    tag12: "",
    tag13: "",
  });
  const DisplayData1 = (props) => {
    console.log("Test");
    console.log(props.tag0);
    setAllValues({
      tag0: props.tag0,
      tag1: props.tag1,
      tag2: props.tag2,
      tag3: props.tag3,
      tag4: props.tag4,
      tag5: props.tag5,
      tag6: props.tag6,
      tag7: props.tag7,
      tag8: props.tag8,
      tag9: props.tag9,
      tag10: props.tag10,
      tag11: props.tag11,
      tag12: props.tag12,
      tag13: props.tag13,
    });
  };

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
      console.log(date);
    };
  });

  useEffect(() => {
    ZONE_1.getReq();
    DisplayData1(ZONE_1.APIdata);
  }, [date]);
  const handleClick = () => {
    window.open("http://59.99.154.95:3050/Reports/browse/JAL_SANSTHAN_REPORTS");
  };

  return (
    <div>
      <div className="zone1-wise-area">
        <span className="data1-point1">{allValues.tag0} m</span>
        <span className="data1-point2">{allValues.tag1} kg/cm2</span>
        <span className="data1-point3">{allValues.tag2} m3/h</span>
        <span className="data1-point4">{allValues.tag3} Kg/Cm2</span>
        <span className="data1-point5">{allValues.tag4} Kg/Cm2</span>

        <div className="zonewise1-btn-group">
          <Link to="/second">
            <button>Instantaneous</button>{" "}
          </Link>
          <Link>
            <button onClick={handleClick}>Logbook </button>
          </Link>
          <Link to="/pratitnagar">
            <button>Pressure of Zone3</button>
          </Link>
          <Link to="/nathuawala">
            <button>Pressure of Zone2</button>
          </Link>
        </div>

        <div className="Zone_Nat-Footer">
          <p className="Zone_Nat-Footer-text">
            Design And Devlop By - Shetal Enterprises 18 Cross 2B Tapovan
            Enclave Raipur Road, Dehradun.
          </p>
        </div>
      </div>
    </div>
  );
}

function useAPi(url) {
  const [APIdata, setData] = useState({});

  useEffect(() => {
    getReq();
  }, []);

  const getReq = async () => {
    const response = await axios.get(url, {
      auth: {
        username: "Admin",
        password: "War_ship_84",
      },
    });
    setData(response.data);
    console.log("Get APIdata activated1");
    console.log(response.data);
  };

  return { APIdata, getReq };
}

export default ZoneWiseKahrakmaf;
