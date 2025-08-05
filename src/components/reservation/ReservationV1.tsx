import thumb3 from "/assets/img/thumb/3.jpg";
import icon1 from "/assets/img/icon/1.png";
import ReactDatePicker from "react-datepicker";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import CustomSelect from "../select/CustomSelect";

interface DataType {
  sectionClass?: string;
}

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

const ReservationV1 = ({ sectionClass }: DataType) => {
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

  return (
    <>
      <div
        className={`reservation-style-one-area default-padding-top ${sectionClass}`}
      >
        <div className="container">
          <div
            className="reservation-style-one-items bg-dark text-light"
            data-aos="fade-up"
          >
            <div className="row">
              <div className="col-xl-6 col-lg-5 reservation-thumb">
                <img src={thumb3} alt="Image Not Found" />
                <div className="icon">
                  <img src={icon1} alt="Image Not Found" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 reservation-info">
                <h4 className="sub-heading">Reserve For</h4>
                <h2 className="title">Amazing Dining</h2>
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
                        <label htmlFor="date">Date</label>
                        <ReactDatePicker
                          id="date1"
                          selected={startDate}
                          onChange={(date: Date | null) => setStartDate(date)}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationV1;
