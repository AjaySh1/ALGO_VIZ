// Main
let sec = document.querySelector('.section');
let heading = document.querySelector('.main__heading');
let counter = 0;

document.querySelector(".title").addEventListener("click", () => {
    if (counter == 10) {
        if (window.localStorage.getItem("questions")) {
            window.localStorage.removeItem("questions");
        } else {
            window.localStorage.setItem("questions", true);
        }
        window.location.reload();
    }
    console.log(counter);
    counter++;
});

let details = [
    {
        heading: 'Sort Algorithms',
        image: 'images/sort.png',
        link: 'templates/sort.html',
        sub_topics: ["bubble", "selection", "insertion", "merge", "quick", "heap", "shell", "counting"]
    },
    {
        heading: 'Graph',
        image: 'images/Directed_Graph.jpg',
        link: 'templates/graph.html',
        sub_topics: [
            "create", "dfs", "bfs", "kruskals", "dfs maze", "djstras", "flood fill",
            "color filling", "topological sorting", "detect cycle", "graph coloring"
        ]
    },
    {
        heading: 'Binary Search Algorithm',
        image: 'images/search.jpg',
        link: 'templates/search.html',
        sub_topics: ["binary search", "start point in rotated array", "find peak element", "biotonic array"]
    },
    {
        heading: 'Binary Search Tree',
        image: 'images/bst.jpg',
        link: 'templates/tree.html',
        sub_topics: ["create", "insert", "delete", "find", "traversal"]
    },
    {
        heading: 'Array',
        image: `images/array.png`,
        link: 'templates/array.html',
        sub_topics: [
            "create", "insert", "delete", "linear search", "prefix sum",
            "kadane", "sliding windows", "partitioning", "rain water trapping"
        ]
    },
    {
        heading: 'Stack',
        image: `images/stack.png`,
        link: 'templates/stack.html',
        sub_topics: [
            "create", "push", "pop", "peek", "Balanced bracket", "infix to postfix",
            "infix to prefix", "postfix evaluation", "prefix evaluation", "Max Area under histogram", "Min Stack O(1)"
        ]
    },
    {
        heading: 'Queue',
        image: 'images/queue.png',
        link: 'templates/queue.html',
        sub_topics: ["create", "enqueue", "dequeue", "bfs"]
    },
    {
        heading: 'Heap',
        image: 'images/heap.png',
        link: 'templates/heap.html',
        sub_topics: ["create", "delete", "insert", "heapify", "heap sort"]
    },
    {
        heading: 'Linked List',
        image: 'images/linked_list.png',
        link: 'templates/linkedlist.html',
        sub_topics: ["singly", "doubly", "circular", "stack", "queue"]
    },
    {
        heading: 'Recursion',
        image: 'images/recursion.jpg',
        link: 'templates/recursion.html',
        sub_topics: ["factorial", "H tree", "snowflakes", "Tower Of Brahma"]
    },
    {
        heading: 'Backtracking',
        image: 'images/back.png',
        link: 'templates/backtracking.html',
        sub_topics: ["N Queens", "maze", "sudoku", "knight tour", "graph coloring"]
    },
    {
        heading: 'Dynamic Programming',
        image: 'images/dp.png',
        link: 'templates/dynamic.html',
        sub_topics: [
            "Travelling Salesman", "0/1 knapsack", "unbounded Knapsack", "subset sum problem",
            "cutting_rod", "coin_change_making", "longest_common_sequence", "levenshtein distance", "ladder"
        ]
    }
  
];

if (!localStorage.getItem("counter")) pop_up();

// Utility
details.forEach((detail, index) => {
    let temp = window.localStorage.getItem("questions");
    if (detail.heading == "Questions" && temp == null) {
        // Do Nothing
    } else {
        add_card(detail, index);
    }
});

function add_card(details, index) {
    let card = document.createElement('div');
    ['col', 'col-12', 'col-md-6', 'col-lg-4'].forEach((el) => card.classList.add(el));
    card.style.borderRadius = '10px';
    card.style.transform = 'scale(.9)';
    let card_html = `
        <div class="card" style="position: relative;">
          <div class="card__heading">${details.heading}</div>
          <div class="card-img-top-parent">
            <img src="${details.image}" class="card-img-top" alt="${details.heading}">
          </div>
          <div class="card-body">
            <button class="btn topic-button" onclick="window.location.href='${details.link}'">
              Explore ${details.heading}
            </button>
          </div>
        </div>
    `;
    card.innerHTML = card_html;
    sec.appendChild(card);

    // details.sub_topics.forEach((e) => {
    //     let card_span = document.createElement('button');
    //     card_span.classList.add('badge');
    //     card_span.classList.add('badge-primary');
    //     card_span.innerText = e.toUpperCase();

    //     document.querySelectorAll('.card-body')[index].appendChild(card_span);
    // });
}

// POP UP
function pop_up() {
    if (+localStorage.getItem("counter") == 1) return;

    if (+localStorage.getItem("first_time") == 1) {
        localStorage.setItem("counter", 1);
    } else {
        localStorage.setItem('first_time', 1);
    }

    if (true && +localStorage.getItem('first_time') == 1) {
        let cross;
        let slider;
        let info;
        cross = document.createElement("span");
        cross.innerText = "X";
        cross.style.position = 'absolute';
        cross.style.top = '10px';
        cross.style.right = '10px';
        cross.style.borderRadius = "10px";
        cross.style.color = 'white';
        cross.style.boxShadow = '1px 1px 10px rgba(255, 255, 255, .5)';
        cross.style.padding = '15px 20px';
        cross.style.cursor = 'pointer';
        cross.classList.add('cross');
        slider = document.createElement("div");
        slider.style.width = '100vw';
        slider.style.height = '100vh';
        slider.style.overflow = 'scroll';
        slider.style.background = 'rgba(0, 0, 0, .9)';
        slider.style.position = 'fixed';
        slider.style.top = '0px';
        slider.style.left = '0px';
        slider.style.zIndex = '20';

        let html = () => {
            let a = `
                <div class="popup__heading">DSALGO</div>
                <div class="popup__sub__heading">
                    <b>AlgoViz</b> 
                    <br/>
                    <code>
                        is made for students who want to learn Data structures and algorithms with Animations. This project includes all the important data structures that are being widely used.
                    </code>
                    <hr />
                    <h5> <b>Topics Covered</b> </h5>
                    <div>`;
            let b = "";
            for (let i = 0; i < details.length; i++)
                b += `<span class="badge badge-primary" style="margin:3px;">${details[i].heading}</span>`;
            let c = `</div></div><blockquote class="popup__sub__heading__details"> </blockquote>`;
            return a + b + c;
        };

        info = document.createElement("div");
        info.innerHTML = html();
        info.style.maxWidth = '600px';
        info.style.textAlign = 'center';
        info.style.margin = '30px';
        info.style.transform = 'translateY(100px)';
        info.style.background = 'white';
        info.style.borderRadius = '10px';
        info.classList.add("info__box");
        info.style.boxShadow = '20px 20px 30px rgba(0, 0, 0, .3)';
        info.style.padding = '20px';
        info.style.border = '1px solid black';
        info.style.margin = 'auto';
        slider.appendChild(cross);
        slider.appendChild(info);
        slider.style.textAlign = 'center';

        document.querySelector('.body__bin').appendChild(slider);
        localStorage.setItem('first_time', 1);
        document.querySelector('.cross').addEventListener("click", () => {
            document.querySelector('.body__bin').innerHTML = '';
        });
    }
}