
    // const heading= React.createElement("h1", {id: "heading"}, "hello world form react")

    // const root = ReactDOM.createRoot(document.getElementById("root"));

    // root.render(heading);

    // console.log(heading);



    // // using js
    //     const head = document.createElement("h2");
    //     head.innerHTML= "hello world form js"
    //     const idd =document.getElementById("rootjs");
    //     idd.appendChild(head);

//nested 
    const parent= React.createElement(
        "div",
        {id:"parent"},
        React.createElement(
            "div",
            {id:"child"},[
            React.createElement("h1",{}, "iam an h1 tag from react"),
            React.createElement("h2",{}, "iam an h2 tag from react")]
        ) 
    );

    const root= ReactDOM.createRoot(
        document.getElementById("root")
    )

    setTimeout(()=>root.render(parent), 5000);
    console.log(parent);