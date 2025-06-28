import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [guests, setGuests] = useState([
    {
      "id": 1,
      "firstName": "Tony",
      "lastName": "Stare",
      "rsvp": false
    },
    {
      id: 2,
      "firstName": "Peter",
      "lastName": "Barker",
      "rsvp": true
    }
  ])

  return (<>
    <div className="container">
      <h1>Guest List</h1>
      <form className="mb-3 mt-3"
        onSubmit={(event) => {
          // the event in this case is form submission event
          event.preventDefault(); // <-- is to stop the browser from submitting the data to server

          // handle form submission
          const newGuest = {
            firstName, lastName, rsvp: false, id: Math.floor(Math.random() * 10000 + 1)
          }

          // add the new guest to the guests array
          setGuests([...guests, newGuest])

          // setGuests[...newGuest, guests]

        }
        }
      >
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} className="form-control" onChange={((e) => {
            setFirstName(e.target.value)
          })} />
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" className="form-control" value={lastName} onChange={(e) => {
            setLastName(e.target.value);
          }} />
        </div>

        <button className="btn btn-primary mt-3">Submit</button>
      </form>

      <ul className="list-group">
        {
          guests.map(guest => (<li className="list-group-item" key={guest.id}>
            <span>{guest.firstName} {guest.lastName}</span>
            <div>
              RSPV: <input type="checkbox"
                checked={guest.rsvp}
                onChange={() => {


                  // modify an object in React, you have also clone the original object and then modify it, and you
                  // need to clone the original array and put the cloned object into the cloned array

                  // 1. clone the object and modify the clone
                  const clonedGuest = { ...guest };
                  clonedGuest.rsvp = !guest.rsvp;

                  // 2. use map clone the guests array, but
                  // if we are cloning the guest which we have changed in step 1, we return the cloned guest instead
                  const cloned = guests.map(currentGuest => {
                    if (currentGuest.id !== guest.id) {
                      return currentGuest;
                    } else {
                      return clonedGuest;
                    }
                  })
                  setGuests(cloned);

                }}

              />
              <div>
                <button className="btn btn-primary btn-sm mt-3" onClick={()=>{

                 const cloned = guests.filter(currentGuest => {
                    if (currentGuest.id !== guest.id) {
                      return true;
                    } else {
                      return false;
                    }
                  })

                  setGuests(cloned);

                }}>Delete</button>
              </div>

            </div>
          </li>))
        }
      </ul >
    </div>
  </>
  )
}