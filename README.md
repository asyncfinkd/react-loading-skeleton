<h1>React Loading Skeleton</h1>
<img src="https://camo.githubusercontent.com/77ca9f8365562131c11dd6bfdb0e81bc8a3aa91474c852229e9b95e64495d239/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6c3049796b346241416a6163334155326b2f67697068792e676966" alt="" />

# Why should I use react-loading-skeleton?

<ul>
  <li>The first reason why you should use it is open source</li>
  <li>The code is easily written.</li>
  <li>Rendering time is not slow</li>
  <li>Customized (will work in any project despite any complexity)</li>
  <li>Good styling which will not interfere with your styles. (Tip: Use a webpack to protect yourself and assign classes automatically to the CSC)</li>
  <li>A test website that is already ready for download is required</li>
</ul>

## Wondering about file structure?

[Click here](content/filestructure.yml) to see the file structure of how we assembled it.

## Code Review

```jsx
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setArticles(data);
    }, 5000);
  });
```
You can ignore this code because it is the JSON from which we bring the information. But here is an interesting thing we have a variable article. Which we call loading. It depends on that. Here I have the currently setTimeOut function. Which after 5 seconds calls the data export to the item variable

```jsx
   {!articles && [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme="light" />)}
```
Here it is written to repeat the skeleton 5 times. Which is once created. This in my opinion is correct and true if you see the code and then the result. You will be more convinced that it was necessary. Initially we had one container where I wrote 3 lines: but the minimum number of containers is 100. I did not do all 100 and decided to do 5. So I put just 5 numbers in the array and put them.

The rest is already simpler, more stylized and already related to imports. And simple JSX syntax. Hope you have a good time

## Contributing

The main purpose of this repository is to continue evolving React Loading Skeleton core, making it faster and easier to use. Development of React Loading Skeleton happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React Loading Skeleton.

## [Code of Conduct](CODE_OF_CONDUCT.md)

React Loading Skeleton has adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

## [Contributing Guide](CONTRIBUTING.md)

Read our contributing guide to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to React Loading Skeleton.

## License

React Loading Skeleton is [MIT licensed](LICENSE)
