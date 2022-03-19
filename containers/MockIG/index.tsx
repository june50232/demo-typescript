import React from 'React'
import MockIGProps from './type'
// import SearchInpupt from ''

const MockIG = (props: MockIGProps) => {
    return (
        <div>
            <section>
                <div>Logo</div>
                <div><input placeholder="search" /></div>
                <ul>
                    <li>Home</li>
                    <li>Message</li>
                    <li>Add</li>
                    <li>Browse</li>
                    <li>Like</li>
                </ul>
                <div>profile</div>
            </section>
        </div>
    )
}

export default MockIG