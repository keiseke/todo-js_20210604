import "./styles.css";

document.getElementById("addButton").addEventListener("click", () => {
  //テキストボックスに入力された値の取り出し
  const text = document.getElementById("todoText").value;

  //テキストボックスを空にする
  document.getElementById("todoText").value = "";

  //未完了のTODOリストに追加
  handleCreateIncomplete(text);
});
//削除処理の関数
const deleteContent = (target) => {
  target.innerText = "";
};

//未完了のTODOリストへ追加処理の関数
const handleCreateIncomplete = (text) => {
  //divタグ生成
  const div = document.createElement("div");
  div.className = "todoList";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //todoListの最初の要素(li)を取り出す
    const todoText = completeButton.parentNode.firstElementChild;

    //todoListの要素を空にする
    const todoList = completeButton.parentNode;
    // todoList.innerText = "";
    //削除処理
    deleteContent(completeButton.parentNode);

    //戻すボタン生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      //未完了のTODOリストに追加
      handleCreateIncomplete(
        returnButton.parentNode.firstElementChild.innerText
      );
      //削除処理
      deleteContent(returnButton.parentNode);
    });

    todoList.appendChild(todoText);
    todoList.appendChild(returnButton);

    //完了したTODOリストに追加
    document.getElementById("completeList").appendChild(todoList);
  });

  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteContent(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  const ul = document.getElementById("incompleteList");
  ul.appendChild(div);
  document.getElementById("incompleteList").appendChild(div);
};
