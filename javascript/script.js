document.addEventListener("DOMContentLoaded", () => {
    const dialogue = document.getElementById("dialogue");
    const optionsList = document.querySelector(".options ul");

    function renderOptions(nodes) {
        optionsList.innerHTML = "";
        nodes.forEach(node => {
            const li = document.createElement("li");
            const btn = document.createElement("button");
            btn.type = "button";
            btn.textContent = node.label;
            btn.addEventListener("click", () => {
                dialogue.textContent = node.text || node.label;
                if (node.children && node.children.length) {
                    renderOptions(node.children);
                } else {
                    optionsList.innerHTML = "";
                }
            });
            li.appendChild(btn);
            optionsList.appendChild(li);
        });
    }
    const volume = document.getElementById('volume-slider');
    audio.volume = volume.value / 100;
    volume.addEventListener("input", (e) => {
    audio.volume = e.target.value / 100;

})
})

    const tree = [
        {
            label: "Option 1",
            text: "Text for Option 1",
            children: [
                {
                    label: "Option 1.1",
                    text: "Text for Option 1.1",
                    children: [
                        { label: "Option 1.1.1", text: "Text for 1.1.1", children: [] },
                        { label: "Option 1.1.2", text: "Text for 1.1.2", children: [] },
                        { label: "Option 1.1.3", text: "Text for 1.1.3", children: [] }
                    ]
                },
                {
                    label: "Option 1.2",
                    text: "Text for Option 1.2",
                    children: [
                        { label: "Option 1.2.1", text: "Text for 1.2.1", children: [] },
                        { label: "Option 1.2.2", text: "Text for 1.2.2", children: [] },
                        { label: "Option 1.2.3", text: "Text for 1.2.3", children: [] }
                    ]
                },
                {
                    label: "Option 1.3",
                    text: "Text for Option 1.3",
                    children: [
                        { label: "Option 1.3.1", text: "Text for 1.3.1", children: [] },
                        { label: "Option 1.3.2", text: "Text for 1.3.2", children: [] },
                        { label: "Option 1.3.3", text: "Text for 1.3.3", children: [] }
                    ]
                }
            ]
        },
        {
            label: "Option 2",
            text: "Text for Option 2",
            children: [
                {
                    label: "Option 2.1",
                    text: "Text for Option 2.1",
                    children: [
                        { label: "Option 2.1.1", text: "Text for 2.1.1", children: [] },
                        { label: "Option 2.1.2", text: "Text for 2.1.2", children: [] },
                        { label: "Option 2.1.3", text: "Text for 2.1.3", children: [] }
                    ]
                },
                {
                    label: "Option 2.2",
                    text: "Text for Option 2.2",
                    children: [
                        { label: "Option 2.2.1", text: "Text for 2.2.1", children: [] },
                        { label: "Option 2.2.2", text: "Text for 2.2.2", children: [] },
                        { label: "Option 2.2.3", text: "Text for 2.2.3", children: [] }
                    ]
                },
                {
                    label: "Option 2.3",
                    text: "Text for Option 2.3",
                    children: [
                        { label: "Option 2.3.1", text: "Text for 2.3.1", children: [] },
                        { label: "Option 2.3.2", text: "Text for 2.3.2", children: [] },
                        { label: "Option 2.3.3", text: "Text for 2.3.3", children: [] }
                    ]
                }
            ]
        },
        {
            label: "Option 3",
            text: "Text for Option 3",
            children: [
                {
                    label: "Option 3.1",
                    text: "Text for Option 3.1",
                    children: [
                        { label: "Option 3.1.1", text: "Text for 3.1.1", children: [] },
                        { label: "Option 3.1.2", text: "Text for 3.1.2", children: [] },
                        { label: "Option 3.1.3", text: "Text for 3.1.3", children: [] }
                    ]
                },
                {
                    label: "Option 3.2",
                    text: "Text for Option 3.2",
                    children: [
                        { label: "Option 3.2.1", text: "Text for 3.2.1", children: [] },
                        { label: "Option 3.2.2", text: "Text for 3.2.2", children: [] },
                        { label: "Option 3.2.3", text: "Text for 3.2.3", children: [] }
                    ]
                },
                {
                    label: "Option 3.3",
                    text: "Text for Option 3.3",
                    children: [
                        { label: "Option 3.3.1", text: "Text for 3.3.1", children: [] },
                        { label: "Option 3.3.2", text: "Text for 3.3.2", children: [] },
                        { label: "Option 3.3.3", text: "Text for 3.3.3", children: [] }
                    ]
                }
            ]
        }
    ];

    dialogue.textContent = "Choose your option";
    renderOptions(tree);