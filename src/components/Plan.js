import React from 'react';

const Plan = props => {
    return (
        <div className="card text-center border-0">
            <div className="card-header bg-dark text-white font-weight-bold">
                {props.plan.title}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-white bg-danger Features">Features</li>
                <li className="list-group-item text-white bg-dark"><span className="text-danger font-weight-bold">price:</span> {props.plan.price}</li>
                <li className="list-group-item text-white bg-dark"><span className="text-danger font-weight-bold">Modules:</span> {props.plan.modules}</li>
                <li className="list-group-item text-white bg-dark"><span className="text-danger font-weight-bold">Access</span>: {props.plan.access}</li>
                <li className="list-group-item text-white bg-dark"><span className="text-danger font-weight-bold">Videos:</span> {props.plan.video}</li>
                <li className="list-group-item text-white bg-dark">{props.plan.download}</li>
                <li className="list-group-item text-white bg-dark"><span className="text-danger font-weight-bold">FAQS:</span> {props.plan.faq}</li>
            </ul>
        </div>
    );
}

export default Plan;
