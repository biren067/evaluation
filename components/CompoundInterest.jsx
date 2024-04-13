import React, { useState } from 'react';
import styles from '@/styles/reinvest.module.css'; // Import component-level CSS

function index() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100; // Convert rate to decimal
    const n = parseInt(years);

    if (isNaN(P) || isNaN(r) || isNaN(n)) {
      alert('Please enter valid values for principal, rate, and years.');
      return;
    }

    const data = [];
    for (let i = 1; i <= n; i++) {
      const A = P * Math.pow(1 + r, i);
      data.push({ year: i, amount: A.toFixed(2) });
    }
    setTableData(data);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles.container}>
      <div className={styles['input-group']}>
        <label htmlFor="principal">Principal:</label>
        <input
          type="number"
          id="principal"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div className={styles['input-group']}>
        <label htmlFor="rate">Rate of Interest (%):</label>
        <input
          type="number"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div className={styles['input-group']}>
        <label htmlFor="years">Number of Years:</label>
        <input
          type="number"
          id="years"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div>
      <button className={styles.button} onClick={calculateCompoundInterest}>Calculate</button>

      <div className={styles['table-container']}>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>${item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.pagination}>
          <button
            className={styles.button}
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: Math.ceil(tableData.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index + 1}
              className={`${styles.button} ${currentPage === index + 1 ? styles.active : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={styles.button}
            onClick={() => setCurrentPage((nextPage) => nextPage + 1)}
            disabled={indexOfLastItem >= tableData.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
