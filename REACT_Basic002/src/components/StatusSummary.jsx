import React from "react";
import "./StatusSummary.css";

function StatusSummary({ cards, t }) {
  const totalStatusCounts = cards.reduce(
    (counts, card) => {
      card.todos.forEach((todo) => {
        counts[todo.status] = (counts[todo.status] || 0) + 1;
      });
      return counts;
    },
    { Plan: 0, "In Progress": 0, Complete: 0, Hold: 0 }
  );

  return (
    <section className="status-summary">
      <h2>{t.overallSummary}</h2>
      <>
        <table>
          <thead>
            <tr>
              <th>{t.plan}</th>
              <th>{t.inProgress}</th>
              <th>{t.complete}</th>
              <th>{t.hold}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{totalStatusCounts.Plan}</td>
              <td>{totalStatusCounts["In Progress"]}</td>
              <td>{totalStatusCounts.Complete}</td>
              <td>{totalStatusCounts.Hold}</td>
            </tr>
          </tbody>
        </table>
      </>
      {/* 各カードごとのステータス集計 */}
      {cards.map((card) => {
        const statusCounts = card.todos.reduce(
          (counts, todo) => {
            counts[todo.status] = (counts[todo.status] || 0) + 1;
            return counts;
          },
          { Plan: 0, "In Progress": 0, Complete: 0, Hold: 0 }
        );

        return (
          <div key={card.id} className="card-status-summary">
            <h3>{card.title}</h3>
            <table>
              <thead>
                <tr>
                  <th>{t.plan}</th>
                  <th>{t.inProgress}</th>
                  <th>{t.complete}</th>
                  <th>{t.hold}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{statusCounts.Plan}</td>
                  <td>{statusCounts["In Progress"]}</td>
                  <td>{statusCounts.Complete}</td>
                  <td>{statusCounts.Hold}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </section>
  );
}

export default StatusSummary;
