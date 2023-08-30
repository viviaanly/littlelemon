import React, { useState } from 'react';

const BookingForm = (props) => {
  const [date, setDate] = useState('');
  const [times, setTimes] = useState('');
  const [guests, setGuest] = useState('');
  const [occasion, setOccasion] = useState('');

  BookingForm.defaultProps = {
    availableTimes: [], // Or provide an empty array or default value
};

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
}

  const handleChange = (e) => {
    setDate(e);
    props.dispatch({ type: 'UPDATE_TIMES', date: e });
  };
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input id='book-date' value={date} onChange={(e) =>handleChange(e.target.value)} type='date' required/>
                        </div>

                        {/*for time select*/}
<div>
  <label htmlFor='book-times'>Choose Time:</label>
  <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
    <option value="">Select a Time</option>
    {props.availableTimes.map(availableTime => {
        console.log(availableTime); // Add this line to check the availableTime
        return <option key={availableTime}>{availableTime}</option>;
    })}
</select>
</div>

{/*for number of guests*/}
<div>
  <label htmlFor='book-guests'>Number of Guests:</label>
  <input id='book-guests' min='1' value={guests} onChange={(e) => setGuest(e.target.value)} />
</div>


                        {/*occasion field*/}
                        <div>
                        <label htmlFor='book-occasion'>Occasion:</label>
                        <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        </select>
                        </div>

                        {/*submit button*/}
                        <div className='btnReceive'>
                        <input aria-label='On Click' type='submit' value={"Make Your Reservation"}/>
                        
                        </div>
                    </fieldset>


                </form>
            </section>
        </header>
    );
};

export default BookingForm;