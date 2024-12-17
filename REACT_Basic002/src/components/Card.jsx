import React from "react";
import "./Card.css";

function Card({
  cardId, // カードID
  title, // カードタイトル
  todos, // タスク一覧
  handleAddTodo, // タスク追加
  handleDeleteCard, // カード削除
  handleEditTodo, // タスク編集
  handleEditTitle, // タイトル編集
  t, // テキスト
}) {
  const generateRandomId = () =>
    Math.floor(10000 + Math.random() * 90000).toString();

  return (
    <div className="card">
      {/* カードタイトル編集 */}
      <h2
        className="card-title"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => handleEditTitle(cardId, e.target.textContent)}
      >
        {title}
      </h2>

      {/* カード削除ボタン */}
      <button
        className="delete-card-button"
        onClick={() => handleDeleteCard(cardId)}
      >
        {t.deleteCard}
      </button>

      {/* タスク追加ボタン */}
      <button
        className="add-todo-button"
        onClick={() =>
          handleAddTodo(cardId, {
            id: generateRandomId(),
            description: t.newTask,
            status: t.plan,
          })
        }
      >
        {t.add}
      </button>

      {/* タスクリスト */}
      {todos.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>{t.details}</th>
              <th>{t.status}</th>
              <th>{t.actions}</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleEditTodo(cardId, todo.id, e.target.textContent)
                  }
                >
                  {todo.description}
                </td>
                <td>
                  <select
                    className="status-option"
                    value={todo.status}
                    onChange={(e) =>
                      handleEditTodo(cardId, todo.id, e.target.value, "status")
                    }
                  >
                    <option value="Plan">{t.plan}</option>
                    <option value="In Progress">{t.inProgress}</option>
                    <option value="Complete">{t.complete}</option>
                    <option value="Hold">{t.hold}</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleEditTodo(cardId, todo.id, null, "delete")
                    }
                  >
                    {t.delete}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>{t.noTasks}</p>
      )}
    </div>
  );
}

export default Card;
