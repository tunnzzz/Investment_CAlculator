import React from 'react'
import { calculateInvestmentResults, formatter, NumberFormat } from '../Utilts/investment'

function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
    // console.log(resultsData);
    return (
        <table id='result'>
            <thead>
                <tr>
                    <th> Year</th>
                    <th> Invsestment Value</th>
                    <th> Intrest (Year)</th>
                    <th> Total Interest</th>
                    <th> Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearData) => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{(yearData.valueEndOfYear)}</td>
                            <td> {(yearData.interest)}</td>
                            <td>{(totalInterest)}</td>
                            <td>{(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Results
