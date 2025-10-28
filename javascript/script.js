document.addEventListener("DOMContentLoaded", () => {
    const dialogue = document.getElementById("dialogue");
    const optionsList = document.querySelector(".options ul");

    function renderOptions(options) {
        optionsList.innerHTML = "";
        options.forEach(opt => {
            const li = document.createElement("li");
            const btn = document.createElement("button");
            btn.type = "button";
            btn.textContent = opt.label;
            btn.addEventListener("click", () => opt.onClick());
            li.appendChild(btn);
            optionsList.appendChild(li);
        });
    }

    const initialOptions = [
        {
            label: "Dialogue option 1",
            onClick: () => {
                dialogue.textContent = "You chose option 1. Choose a follow-up:";
                renderOptions([
                    { label: "Follow-up 1A", onClick: () => dialogue.textContent = "You chose 1A" },
                    { label: "Follow-up 1B", onClick: () => dialogue.textContent = "You chose 1B" },
                    { label: "Follow-up 1C", onClick: () => dialogue.textContent = "You chose 1C" }
                ]);
            }
        },
        {
            label: "Dialogue option 2",
            onClick: () => {
                dialogue.textContent = "You chose option 2. Choose a follow-up:";
                renderOptions([
                    { label: "Follow-up 2A", onClick: () => dialogue.textContent = "You chose 2A" },
                    { label: "Follow-up 2B", onClick: () => dialogue.textContent = "You chose 2B" },
                    { label: "Follow-up 2C", onClick: () => dialogue.textContent = "You chose 2C" }
                ]);
            }
        },
        {
            label: "Dialogue option 3",
            onClick: () => {
                dialogue.textContent = "You chose option 3. Choose a follow-up:";
                renderOptions([
                    { label: "Follow-up 3A", onClick: () => dialogue.textContent = "You chose 3A" },
                    { label: "Follow-up 3B", onClick: () => dialogue.textContent = "You chose 3B" },
                    { label: "Follow-up 3C", onClick: () => dialogue.textContent = "You chose 3C" }
                ]);
            }
        }
    ];

    renderOptions(initialOptions);
});