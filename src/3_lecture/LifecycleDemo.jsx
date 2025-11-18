import React, {useEffect, useState} from "react";

const MyComponent = ({count}) => {

    useEffect(() => {
        console.log("🔹 Mounted");

        return () => {
            console.log("❌ Unmounted");
        };
    }, []);

    useEffect(() => {
        console.log(`🔄 Updated → count is now ${count}`);
    }, [count]);


    useEffect(() => {
        console.log(new Date().getMilliseconds())
    });


    return (
        <div className="card mt-3">
            <div className="card-body">
                <p className="card-text">
                    <strong>Count value:</strong> {count}
                </p>
            </div>
        </div>
    );
}

const LifecycleDemo = () => {
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <div className="container py-4">
            <h2 className="mb-4">Lifecycle Demo</h2>

            {!show && (
                <button
                    className="btn btn-primary me-2"
                    onClick={() => setShow(true)}
                >
                    Render Component
                </button>
            )}

            {show && (
                <>
                    <button className="btn btn-success me-2" onClick={() => setCount((c) => c + 1)}>
                        Update Component
                    </button>
                    <button className="btn btn-danger" onClick={() => setShow(false)}>
                        Unmount Component
                    </button>
                    <MyComponent count={count}/>
                </>
            )}
        </div>
    );
}

export default LifecycleDemo;
