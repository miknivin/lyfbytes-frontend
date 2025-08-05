import banner1 from "/assets/img/banner/1.jpg";
import icon3 from "/assets/img/icon/3.png";
import icon4 from "/assets/img/icon/4.png";
import icon5 from "/assets/img/icon/5.png";
import CustomSelect from "../select/CustomSelect";
import { useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { toast } from "react-toastify";

interface FormEventHandler {
  // eslint-disable-next-line no-unused-vars
  (event: React.FormEvent<HTMLFormElement>): void;
}

const handleBooking: FormEventHandler = (event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  form.reset();
  toast.success("Thanks For Your Message");
};

const ReservationV2 = () => {
  const persons = [
    { value: "1", label: "1 Person" },
    { value: "2", label: "2 Person" },
    { value: "3", label: "3 Person" },
    { value: "4", label: "4 Person" },
    { value: "5", label: "5 Person" },
  ];

  const hours = [
    { value: "10", label: "10:00 AM" },
    { value: "11", label: "11:00 AM" },
    { value: "12", label: "12:00 AM" },
    { value: "1", label: "01:00 PM" },
    { value: "2", label: "02:00 PM" },
    { value: "3", label: "03:00 PM" },
  ];

  const [startDate, setStartDate] = useState<Date | null>(null);

  const datePickerRef1 = useRef<ReactDatePicker | null>(null);
  const datePickerRef2 = useRef<ReactDatePicker | null>(null);
  const datePickerRef3 = useRef<ReactDatePicker | null>(null);

  return (
    <>
      <div className="reservation-style-two-area">
        <div className="reservation-banner">
          <img src={banner1} alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="reservation-tabs">
                <ul
                  className="nav nav-tabs"
                  data-aos="fade-left"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="tab_1"
                      data-bs-toggle="tab"
                      data-bs-target="#tabs_1"
                      type="button"
                      role="tab"
                      aria-controls="tabs_1"
                      aria-selected="true"
                    >
                      <img src={icon3} alt="Image Not Found" />
                      Buffet
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="tab_2"
                      data-bs-toggle="tab"
                      data-bs-target="#tabs_2"
                      type="button"
                      role="tab"
                      aria-controls="tabs_2"
                      aria-selected="false"
                    >
                      <img src={icon4} alt="Image Not Found" />
                      Party
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="tab_3"
                      data-bs-toggle="tab"
                      data-bs-target="#tabs_3"
                      type="button"
                      role="tab"
                      aria-controls="tabs_3"
                      aria-selected="false"
                    >
                      <img src={icon5} alt="Image Not Found" />
                      Event
                    </button>
                  </li>
                </ul>
                <div
                  className="tab-content"
                  data-aos="fade-up"
                  id="myTabContent"
                  data-aos-delay="300"
                >
                  <h4 className="sub-heading">Reservation</h4>
                  <h2 className="title">Book A Table</h2>
                  <div
                    className="tab-pane fade show active"
                    id="tabs_1"
                    role="tabpanel"
                    aria-labelledby="tab_1"
                  >
                    <form className="reservation-form" onSubmit={handleBooking}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                              className="form-control no-arrows"
                              id="phone"
                              name="phone"
                              placeholder="9847004200"
                              type="number"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="subject">Person</label>
                            <CustomSelect options={persons} selectValue={"0"} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="input-group date date-picker-one">
                            <label htmlFor="date1">Date</label>
                            <ReactDatePicker
                              id="date1"
                              selected={startDate}
                              onChange={(date: Date | null) =>
                                setStartDate(date)
                              }
                              placeholderText="Date"
                              ref={datePickerRef1}
                            />
                            <span
                              className="input-group-addon"
                              onClick={() => datePickerRef1.current?.setFocus()}
                            >
                              <i className="fas fa-calendar-alt"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="time">Time</label>
                            <CustomSelect options={hours} selectValue={"0"} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <button type="submit" name="submit" id="submit">
                            Book A Table
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tabs_2"
                    role="tabpanel"
                    aria-labelledby="tab_2"
                  >
                    <form className="reservation-form" onSubmit={handleBooking}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="phone2">Phone</label>
                            <input
                              className="form-control no-arrows"
                              id="phone2"
                              name="phone2"
                              placeholder="9847004200"
                              type="number"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="subject2">Person</label>
                            <CustomSelect options={persons} selectValue={"0"} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="input-group date date-picker-one">
                            <label htmlFor="date2">Date</label>
                            <ReactDatePicker
                              id="date2"
                              selected={startDate}
                              onChange={(date: Date | null) =>
                                setStartDate(date)
                              }
                              placeholderText="Date"
                              ref={datePickerRef2}
                            />
                            <span
                              className="input-group-addon"
                              onClick={() => datePickerRef2.current?.setFocus()}
                            >
                              <i className="fas fa-calendar-alt"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="time2">Time</label>
                            <CustomSelect options={hours} selectValue={"0"} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <button type="submit" name="submit2" id="submit2">
                            Book A Table
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tabs_3"
                    role="tabpanel"
                    aria-labelledby="tab_3"
                  >
                    <form className="reservation-form" onSubmit={handleBooking}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="phone3">Phone</label>
                            <input
                              className="form-control no-arrows"
                              id="phone3"
                              name="phone3"
                              placeholder="9847004200"
                              type="number"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="subject3">Person</label>
                            <CustomSelect options={persons} selectValue={"0"} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="input-group date date-picker-one">
                            <label htmlFor="date3">Date</label>
                            <ReactDatePicker
                              id="date3"
                              selected={startDate}
                              onChange={(date: Date | null) =>
                                setStartDate(date)
                              }
                              placeholderText="Date"
                              ref={datePickerRef3}
                            />
                            <span
                              className="input-group-addon"
                              onClick={() => datePickerRef3.current?.setFocus()}
                            >
                              <i className="fas fa-calendar-alt"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="time3">Time</label>
                            <CustomSelect options={hours} selectValue={"0"} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <button type="submit" name="submit3" id="submit3">
                            Book A Table
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationV2;
