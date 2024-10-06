import React from 'react'

const Page = () => {
  return (
    <div className='container' style={{marginTop: "92px"}}>
        <h1>Seite 2</h1>
        <p>Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.</p>
        <h2>Form Elements</h2>
        <form>
        <div className="row">
            <div className="six columns">
            <label htmlFor="exampleEmailInput">Your email</label>
            <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput"/>
            </div>
            <div className="six columns">
            <label htmlFor="exampleRecipientInput">Reason for contacting</label>
            <select className="u-full-width" id="exampleRecipientInput">
                <option value="Option 1">Questions</option>
                <option value="Option 2">Admiration</option>
                <option value="Option 3">Can I get your number?</option>
            </select>
            </div>
        </div>
        <label htmlFor="exampleMessage">Message</label>
        <textarea className="u-full-width" placeholder="Hi George …" id="exampleMessage"></textarea>
        <label className="example-send-yourself-copy">
            <input type="checkbox"/>
            <span className="label-body">Send a copy to yourself</span>
        </label>
        <input className="button-primary" type="submit" value="Submit"/>
        </form>
        <hr />
        <h2>Tables</h2>
        <table className="u-full-width">
            <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Location</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Dave Gamache</td>
                <td>26</td>
                <td>Male</td>
                <td>San Francisco</td>
                </tr>
                <tr>
                <td>Dwayne Johnson</td>
                <td>42</td>
                <td>Male</td>
                <td>Hayward</td>
                </tr>
            </tbody>
        </table>
        <hr />
        <h2>Buttons</h2>
        {/* Standard buttons */}
        <a className="button" href="#">Anchor button</a>
        <button>Button element</button>
        <input type="submit" value="submit input"/>
        <input type="button" value="button input"/>

        {/* Primary buttons */}
        <a className="button button-primary" href="#">Anchor button</a>
        <button className="button-primary">Button element</button>
        <input className="button-primary" type="submit" value="submit input"/>
        <input className="button-primary" type="button" value="button input"></input>
    </div>
  )
}

export default Page