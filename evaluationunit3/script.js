
const form = document.getElementById("form");
const codeInput = document.getElementById("code");
const list = document.getElementById("list");

let codeArr = JSON.parse(localStorage.getItem("list")) || [];

function renderList() {
	list.innerHTML = "";
	codeArr.forEach((item, idx) => {
		const div = document.createElement("div");
		div.textContent = item;
		div.style.display = "block";
		div.style.marginBottom = "8px";
		const delBtn = document.createElement("button");
		delBtn.textContent = "Delete";
		delBtn.style.marginLeft = "10px";
		delBtn.onclick = function() {
			codeArr.splice(idx, 1);
			localStorage.setItem("list", JSON.stringify(codeArr));
			renderList();
		};
		div.appendChild(delBtn);
		list.appendChild(div);
	});
}

form.addEventListener("submit", function(e) {
	e.preventDefault();
	const value = codeInput.value.trim();
	if (value) {
		codeArr.push(value);
		localStorage.setItem("list", JSON.stringify(codeArr));
		renderList();
		codeInput.value = "";
	}
});


renderList();
