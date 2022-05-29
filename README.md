# Exam2

## How to start :

```jsx
yarn dev
```

## Host url:

```jsx
https://desolate-brook-06243.herokuapp.com/
```

## figma compare:

```jsx
https://www.figma.com/file/7pzGbh20i9LyxFqo1pyHtm/homeWork
```

## Find bug:

- **Layout:**
    - Result page had tructated problem
- **API:**
    - Get Tags:
        - url: [https://avl-frontend-exam.herokuapp.com/api/tags](https://avl-frontend-exam.herokuapp.com/api/tags)
        - problem:
            
            no parameter could be pass but have the ****infinite requirement****
            
    - Get Result:
        - url:[https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10&keyword=](https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10&keyword=a)
        - problem:
            - it same like follower address
            - when query over size should be return error
    - Get Follower
        - url:[https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10&keyword=](https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10&keyword=a)
        - problem:
            - it same like result address

## Introduce tech:

- language: typescript
- Css frame work: tailwndcss
- State manage : use context api to do similar redux toolkit constructure, in the team work I think redux more better
- Svg modulize that you could change color and size
- webpack to package
- lazy route
- use **IntersectionObserver** customize infinite scroll loading
- reset css