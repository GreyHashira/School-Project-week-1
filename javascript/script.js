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

    const tree = [
        {
            label: "Sure, let's take a look together",
            text: "Jecka and Nicole entered the store to see the strange object. The shop owner came to them and asked if they came to buy it. The 2 looked at each other and asked what the prices were. Jecka: It looks cool. What are the prices for it? Shop owner: Either 10 million $ or a sacrifice. Nicole: That second option sounds terrifying to me. Jecka: I have to agree. Shop owner: This thing will not work when you are not rich or when you don't want to sacrifice someone for it. Nicole: Do you want it or not? Jecka: (Let me think about it) ",
            children: [
                {
                    label: "Sorry, Nicole, but I really want this",
                    text: "Jecka pushed Nicole away, and Nicole landed on something sharp and did not survive. Jecka grabs the thing and leaves the store behind. Jecka: Now that I have this thing I can have some peace. Nicole? Where are you? Well I guess she was the sacrifice for this thing. I am going home now. Or should I? ",
                    children: [
                        { label: "Go home and summon the creature at a soccerfield", text: "Jecka walked to the middle of a soccerfield and summoned the creature. Creature: Thanks for freeing me. Now I will destroy this planet. There is no going back now. Jecka: Can you just kill every human, they look kind of like me, and let this planet survive, so I can live. Creature: I deny your request. Your heart showed true darkness, and only true light can command me. Jecka: At least I tried. In the end the entire planet Earth was destroyed in a few days. Jecka learned a lesson she thought was unnecessary to learn in the first place. Never make bad decisions, since it will eventually cause total destruction to a planet.", children: [] },
                        { label: "Wish to have sacrificed the shop owner instead", text: "Jecka has destroyed the strange object. She goes to school and does not look back at all. A few years later Jecka got arrested for murder. In the end, making good decisions after a bad decision can lead to balance, but sometimes your past will eventually catch up to you. So if you try to keep balance, make sure to not make terrible decisions at all.", children: [] },
                        { label: "Wish to alter reality, so that you did not enter the store at all", text: "Jecka and Nicole stepped into the school bus, and they went to school. When they tried to find that weird shop, they never found it again. In the end, when you keep making good decisions, even if they are tough, they can avoid getting you into trouble. ", children: [] }
                    ]
                },
                {
                    label: "Sacrifice the strange shop owner",
                    text: "The shop owner was shocked. They couldn't do anything. Jecka grabbed the thing and walked outside to chat with Nicole. Jecka and Nicole are going to Jecka's house. Nicole: What does it do? Jecka: I have no idea. Nicole: Let's figure that out after school. Jecka: (I will have to think about this) ",
                    children: [
                        { label: "Use the thing to end Nicole", text: "Jecka walked to the middle of a soccerfield and summoned the creature. Creature: Thanks for freeing me. Now I will destroy this planet. There is no going back now. Jecka: Can you just kill every human, they look kind of like me, and let this planet survive, so I can live. Creature: I deny your request. Your heart showed true darkness, and only true light can command me. Jecka: At least I tried. In the end the entire planet Earth was destroyed in a few days. Jecka learned a lesson she thought was unnecessary to learn in the first place. Never make bad decisions, since it will eventually cause total destruction to a planet.", children: [] },
                        { label: "Sure, let's go to school before trying this thing out", text: "Jecka has destroyed the strange object. She goes to school and does not look back at all. A few years later Jecka got arrested for murder. In the end, making good decisions after a bad decision can lead to balance, but sometimes your past will eventually catch up to you. So if you try to keep balance, make sure to not make terrible decisions at all.", children: [] },
                        { label: "Wish to have never entered that store at all", text: "Jecka and Nicole stepped into the school bus, and they went to school. When they tried to find that weird shop, they never found it again. In the end, when you keep making good decisions, even if they are tough, they can avoid getting you into trouble.", children: [] }
                    ]
                },
                {
                    label: "Let's get out of here Nicole",
                    text: "Jecka and Nicole walked to the school bus. Jecka hesitated before she stepped in. Nicole: Everything okay? Jecka: (Let me think about this) ",
                    children: [
                        { label: "Wish to have sacrificed Nicole to phase through the bus and release the creature inside of the thing. ", text: "Jecka walked to the middle of a soccerfield and summoned the creature. Creature: Thanks for freeing me. Now I will destroy this planet. There is no going back now. Jecka: Can you just kill every human, they look kind of like me, and let this planet survive, so I can live. Creature: I deny your request. Your heart showed true darkness, and only true light can command me. Jecka: At least I tried. In the end the entire planet Earth was destroyed in a few days. Jecka learned a lesson she thought was unnecessary to learn in the first place. Never make bad decisions, since it will eventually cause total destruction to a planet.", children: [] },
                        { label: "Wish to have sacrificed the shop owner to break the thing", text: "Jecka has destroyed the strange object. She goes to school and does not look back at all. A few years later Jecka got arrested for murder. In the end, making good decisions after a bad decision can lead to balance, but sometimes your past will eventually catch up to you. So if you try to keep balance, make sure to not make terrible decisions at all.", children: [] },
                        { label: "Get into the school bus and go to school", text: "Jecka and Nicole stepped into the school bus, and they went to school. When they tried to find that weird shop, they never found it again. In the end, when you keep making good decisions, even if they are tough, they can avoid getting you into trouble.", children: [] }
                    ]
                }
            ]
        },
        {
            label: "Wait outside for me",
            text: "Jecka walks into the store. Shop owner: Welcome to our store. Are you looking to buy something? Jecka: This thing here caught my eye. Shop owner: It is worth 10 million $ or a sacrifice. The choice is yours. Call your friend or walk away. Jecka: (I need to think this through) ",
            children: [
                {
                    label: "Call Nicole and tell her to stand so that Jecka can end her to get the thing",
                    text: "Jecka pushed Nicole away, and Nicole landed on something sharp and did not survive. Jecka grabs the thing and leaves the store behind. Jecka: Now that I have this thing I can have some peace. Nicole? Where are you? Well I guess she was the sacrifice for this thing. I am going home now. Or should I?",
                    children: [
                        { label: "Go home and summon the creature at a soccerfield", text: "Jecka walked to the middle of a soccerfield and summoned the creature. Creature: Thanks for freeing me. Now I will destroy this planet. There is no going back now. Jecka: Can you just kill every human, they look kind of like me, and let this planet survive, so I can live. Creature: I deny your request. Your heart showed true darkness, and only true light can command me. Jecka: At least I tried. In the end the entire planet Earth was destroyed in a few days. Jecka learned a lesson she thought was unnecessary to learn in the first place. Never make bad decisions, since it will eventually cause total destruction to a planet.", children: [] },
                        { label: "Wish to have sacrificed the shop owner instead", text: "Jecka has destroyed the strange object. She goes to school and does not look back at all. A few years later Jecka got arrested for murder. In the end, making good decisions after a bad decision can lead to balance, but sometimes your past will eventually catch up to you. So if you try to keep balance, make sure to not make terrible decisions at all.", children: [] },
                        { label: "Wish to alter reality, so that you did not enter the store at all", text: "Jecka and Nicole stepped into the school bus, and they went to school. When they tried to find that weird shop, they never found it again. In the end, when you keep making good decisions, even if they are tough, they can avoid getting you into trouble.", children: [] }
                    ]
                },
                {
                    label: "Sacrifice the weird shop owner",
                    text: "The shop owner was shocked. They couldn't do anything. Jecka grabbed the thing and walked outside to chat with Nicole. Jecka and Nicole are going to Jecka's house. Nicole: What does it do? Jecka: I have no idea. Nicole: Let's figure that out after school. Jecka: (I will have to think about this)",
                    children: [
                        { label: "Use the thing to end Nicole", text: "Jecka walked to the middle of a soccerfield and summoned the creature. Creature: Thanks for freeing me. Now I will destroy this planet. There is no going back now. Jecka: Can you just kill every human, they look kind of like me, and let this planet survive, so I can live. Creature: I deny your request. Your heart showed true darkness, and only true light can command me. Jecka: At least I tried. In the end the entire planet Earth was destroyed in a few days. Jecka learned a lesson she thought was unnecessary to learn in the first place. Never make bad decisions, since it will eventually cause total destruction to a planet.", children: [] },
                        { label: "Sure, let's go to school before trying this thing out", text: "Jecka has destroyed the strange object. She goes to school and does not look back at all. A few years later Jecka got arrested for murder. In the end, making good decisions after a bad decision can lead to balance, but sometimes your past will eventually catch up to you. So if you try to keep balance, make sure to not make terrible decisions at all.", children: [] },
                        { label: "Wish to have never entered that store at all", text: "Jecka and Nicole stepped into the school bus, and they went to school. When they tried to find that weird shop, they never found it again. In the end, when you keep making good decisions, even if they are tough, they can avoid getting you into trouble.", children: [] }
                    ]
                },
                {
                    label: "Walk outside and ignore the item",
                    text: "Don't go back and get ready to leave the store. Jecka and Nicole walked to the school bus. Jecka hesitated before she stepped in. Nicole: Everything okay? Jecka: (Let me think about this)",
                    children: [
                        { label: "Wish to have sacrificed Nicole to phase through the bus and release the creature inside of the thing.", text: "Jecka walked to the middle of a soccerfield and summoned the creature. Creature: Thanks for freeing me. Now I will destroy this planet. There is no going back now. Jecka: Can you just kill every human, they look kind of like me, and let this planet survive, so I can live. Creature: I deny your request. Your heart showed true darkness, and only true light can command me. Jecka: At least I tried. In the end the entire planet Earth was destroyed in a few days. Jecka learned a lesson she thought was unnecessary to learn in the first place. Never make bad decisions, since it will eventually cause total destruction to a planet.", children: [] },
                        { label: "Wish to have sacrificed the shop owner to break the thing", text: "Jecka has destroyed the strange object. She goes to school and does not look back at all. A few years later Jecka got arrested for murder. In the end, making good decisions after a bad decision can lead to balance, but sometimes your past will eventually catch up to you. So if you try to keep balance, make sure to not make terrible decisions at all.", children: [] },
                        { label: "Get into the school bus and go to school", text: "Jecka and Nicole stepped into the school bus, and they went to school. When they tried to find that weird shop, they never found it again. In the end, when you keep making good decisions, even if they are tough, they can avoid getting you into trouble.", children: [] }
                    ]
                }
            ]
        },
        {
            label: "Let's just ignore it. It makes me kind of nervous",
            text: "Jecka and Nicole both walk away from that strange store and continue their journey in the mall. Nicole: Why didn't you go for that thing? Jecka: I got a little bit scared of it. Nicole: I felt the same. You sure you don't want to check it out yourself? Jecka: (I need to think about this) ",
            children: [
                {
                    label: "Go back and sacrifice Nicole for that thing",
                    text: "Jecka pushed Nicole away, and Nicole landed on something sharp and did not survive. Jecka grabs the thing and leaves the store behind. Jecka: Now that I have this thing I can have some peace. Nicole? Where are you? Well I guess she was the sacrifice for this thing. I am going home now. Or should I?",
                    children: [
                        { label: "Go home and summon the creature at a soccerfield", text: "Jecka walked to the middle of a soccerfield and summoned the creature. Creature: Thanks for freeing me. Now I will destroy this planet. There is no going back now. Jecka: Can you just kill every human, they look kind of like me, and let this planet survive, so I can live. Creature: I deny your request. Your heart showed true darkness, and only true light can command me. Jecka: At least I tried. In the end the entire planet Earth was destroyed in a few days. Jecka learned a lesson she thought was unnecessary to learn in the first place. Never make bad decisions, since it will eventually cause total destruction to a planet.", children: [] },
                        { label: "Wish to have sacrificed the shop owner instead", text: "Jecka has destroyed the strange object. She goes to school and does not look back at all. A few years later Jecka got arrested for murder. In the end, making good decisions after a bad decision can lead to balance, but sometimes your past will eventually catch up to you. So if you try to keep balance, make sure to not make terrible decisions at all.", children: [] },
                        { label: "Wish to alter reality, so that you did not enter the store at all", text: "Jecka and Nicole stepped into the school bus, and they went to school. When they tried to find that weird shop, they never found it again. In the end, when you keep making good decisions, even if they are tough, they can avoid getting you into trouble.", children: [] }
                    ]
                },
                {
                    label: "Go back and sacrifice the shop owner for that thing",
                    text: "The shop owner was shocked. They couldn't do anything. Jecka grabbed the thing and walked outside to chat with Nicole. Jecka and Nicole are going to Jecka's house. Nicole: What does it do? Jecka: I have no idea. Nicole: Let's figure that out after school. Jecka: (I will have to think about this)",
                    children: [
                        { label: "Use the thing to end Nicole", text: "Jecka walked to the middle of a soccerfield and summoned the creature. Creature: Thanks for freeing me. Now I will destroy this planet. There is no going back now. Jecka: Can you just kill every human, they look kind of like me, and let this planet survive, so I can live. Creature: I deny your request. Your heart showed true darkness, and only true light can command me. Jecka: At least I tried. In the end the entire planet Earth was destroyed in a few days. Jecka learned a lesson she thought was unnecessary to learn in the first place. Never make bad decisions, since it will eventually cause total destruction to a planet.", children: [] },
                        { label: "Sure, let's go to school before trying this thing out", text: "Jecka has destroyed the strange object. She goes to school and does not look back at all. A few years later Jecka got arrested for murder. In the end, making good decisions after a bad decision can lead to balance, but sometimes your past will eventually catch up to you. So if you try to keep balance, make sure to not make terrible decisions at all.", children: [] },
                        { label: "Wish to have never entered that store at all", text: "Jecka and Nicole stepped into the school bus, and they went to school. When they tried to find that weird shop, they never found it again. In the end, when you keep making good decisions, even if they are tough, they can avoid getting you into trouble.", children: [] }
                    ]
                },
                {
                    label: "Don't go back and get ready to leave the store",
                    text: "Don't go back and get ready to leave the store. Jecka and Nicole walked to the school bus. Jecka hesitated before she stepped in. Nicole: Everything okay? Jecka: (Let me think about this)",
                    children: [
                        { label: "Wish to have sacrificed Nicole to phase through the bus and release the creature inside of the thing.", text: "Jecka walked to the middle of a soccerfield and summoned the creature. Creature: Thanks for freeing me. Now I will destroy this planet. There is no going back now. Jecka: Can you just kill every human, they look kind of like me, and let this planet survive, so I can live. Creature: I deny your request. Your heart showed true darkness, and only true light can command me. Jecka: At least I tried. In the end the entire planet Earth was destroyed in a few days. Jecka learned a lesson she thought was unnecessary to learn in the first place. Never make bad decisions, since it will eventually cause total destruction to a planet.", children: [] },
                        { label: "Wish to have sacrificed the shop owner to break the thing", text: "Jecka has destroyed the strange object. She goes to school and does not look back at all. A few years later Jecka got arrested for murder. In the end, making good decisions after a bad decision can lead to balance, but sometimes your past will eventually catch up to you. So if you try to keep balance, make sure to not make terrible decisions at all.", children: [] },
                        { label: "Get into the school bus and go to school", text: "Jecka and Nicole stepped into the school bus, and they went to school. When they tried to find that weird shop, they never found it again. In the end, when you keep making good decisions, even if they are tough, they can avoid getting you into trouble.", children: [] }
                    ]
                }
            ]
        }
    ];

    dialogue.textContent = "Jecka and Nicole are shopping in a mall. Jecka suddenly stops, because she sees something interresting. Nicole: What do you see? Jecka: I don't know, but it looks interresting. Nicole: Do you want to take a look at it? Jecka: (Let me think about this) ";
    renderOptions(tree);
});
