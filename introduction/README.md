
The react-hooks enables us to use 'states' and 'lifecycles methods' without using ___Class___ syntax, reducing the code verbosity.

[Official Documentation](https://reactjs.org/docs/hooks-reference.html)

__Note__

React 16.8.0 is the first release to support Hooks. When upgrading, don’t forget to update all packages, including React DOM. React Native supports Hooks since the 0.59 release of React Native.

This new react-hooks Api can reduce verbosity from libraries like Redux, Apollo(graphQL), and others that want to serve data to our app.

----
`__Basic Hooks__`

## Hook { useState }

This hook will belong to the component function, allowing working with states using functions syntax.

const [techs, setTechs] = useState([])

const [1 , 2] = 3(4)

1 - techs - state brand
2 - setTechs - It's a function used to update this unique state, like the ___this.setState___ but for a unique state.
3 - useState - this hook return an array.
4 - initial state argument is only used during the first render ( null, '',[], [{text:}], number, etc...  )

## Hook { useEffect}

This hook replaces the lifecycle methods used in ___Class___ syntax.

useEffect(()=>{1},[2])
1 - function to be executed
2 - when the fuction should be perfomed - empty for only one time.

Every time you are using some variable inside the useEffect it must be declared into the array to be monitored.

## Hook {useMemo}

This hook came to help us avoid expensive calculations on every render.

const memoizedValue = useMemo(() => /1/ - computeExpensiveValue(a, b), /2/ [a, b]);

1 - function statement
2 - states used by a function to be monitored, trigger the useMemo on every change.

## Hook { useCallBack }

It's like the useMemo but instead returns a single value it will return a function, to prevent unnecessary renders.

useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)

`__Redux Hooks__`

With this new approuch we can simplify the redux implementation and reduce the code verbosity.
avoid to use connect(), mapStateToProps(), MapDispatchToProps()

## Hooks from react-redux { useSelector }
Replacing mapStateToProps

const result : any = useSelector(selector : Function, equalityFn? : Function)

## Hooks from react-redux { useDispatch}
replace mapDispatchToProps
