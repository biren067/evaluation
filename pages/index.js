import { Inter } from "next/font/google";
import CompoundInterest from "@/components/CompoundInterest";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ol className="">
    <li>Re-Invest Calculation: Investing money continously 
      <button className="button">
        <Link href='/page/reinvest'>Calculate</Link>
      </button>
    </li>
    
    <li>Age calculation: Calculate Age of a Person 
      <button className="button">
        <Link href='/page/agecalculator'>Calculate</Link>
      </button>
    </li>

    <li>SIP (Systematic Investment Plan) calculation (e.g., "SIP calculator")</li>
    <li>Currency converter (e.g., "convert USD to EUR")</li>
    <li>Mortgage calculator (e.g., "mortgage payment calculator")</li>
    <li>BMI (Body Mass Index) calculator (e.g., "calculate BMI")</li>
    <li>Percentage calculator (e.g., "calculate percentage increase")</li>
    <li>GPA (Grade Point Average) calculator (e.g., "calculate GPA")</li>
    <li>Tip calculator (e.g., "calculate tip amount")</li>
    <li>Retirement savings calculator (e.g., "retirement savings estimator")</li>
    <li>Loan repayment calculator (e.g., "calculate loan repayment")</li>
    <li>Tax calculator (e.g., "income tax calculator")</li>
    <li>Interest rate calculator (e.g., "calculate interest rate")</li>
    <li>Distance calculator (e.g., "calculate distance between two points")</li>
    <li>Time zone converter (e.g., "convert time zones")</li>
    <li>Fuel cost calculator (e.g., "calculate fuel cost for trip")</li>
    <li>Square footage calculator (e.g., "calculate square footage")</li>
    <li>Volume calculator (e.g., "calculate volume of a cylinder")</li>
    <li>Area calculator (e.g., "calculate area of a circle")</li>
    <li>Factorial calculator (e.g., "calculate factorial of a number")</li>
    <li>Quadratic equation solver (e.g., "solve quadratic equation")</li>
    <li>Exponential calculator (e.g., "calculate exponent")</li>
    <li>Prime number calculator (e.g., "check if a number is prime")</li>
    <li>Binary/Hexadecimal/Decimal converter (e.g., "convert binary to decimal")</li>
    <li>LCM (Least Common Multiple) calculator (e.g., "calculate LCM")</li>
    <li>GCD (Greatest Common Divisor) calculator (e.g., "calculate GCD")</li>
    <li>Statistics calculator (e.g., "calculate mean, median, mode")</li>
    <li>Angle calculator (e.g., "calculate angle of a triangle")</li>
    <li>Discount calculator (e.g., "calculate discount amount")</li>
    <li>Perimeter calculator (e.g., "calculate perimeter of a rectangle")</li>
    <li>Time duration calculator (e.g., "calculate time duration between two dates")</li>
    <li>Salary Calculator</li>
</ol>
 
      </main>
  );
}
