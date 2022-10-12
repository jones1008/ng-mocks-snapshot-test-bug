# ng-mocks snapshot test bug
This is a reproduction repository for https://stackoverflow.com/q/73307975/7987318

## reproduction steps
To reproduce the bug follow these steps:
```
npm install
npm run test
npm run single-test-fail
```

See that when running `npm run test` the tests pass, and when running `npm run single-test-fail` the test fails with the following error:
```
 FAIL  src/app/components/hello.component.spec.ts
  HelloComponent
    ✕ should render component correctly with other name (66 ms)
    ○ skipped should render component correctly with Joe

  ● HelloComponent › should render component correctly with other name

    expect(received).toMatchSnapshot()

    Snapshot name: `HelloComponent should render component correctly with other name 1`

    - Snapshot  - 1
    + Received  + 1

    @@ -1,7 +1,7 @@
      <mock-render
    -   __ngContext__={[Function Number]}
    +   __ngContext__="0"
      >
        <hello>
          <h1>
            Hello Jane!
          </h1>

      15 |   it('should render component correctly with other name', () => {
      16 |     const fixture = MockRender(HelloComponent, {name: 'Jane'});
    > 17 |     expect(fixture).toMatchSnapshot()
         |                     ^
      18 |   });
      19 | });
      20 |

      at src/app/components/hello.component.spec.ts:17:21
```
## Notes:
- `npm run single-test-fail` executes `jest -t 'HelloComponent should render component correctly with other name'` and therefore the second test in the `hello-component.spec.ts` file
- `npm run single-test-fail` executes `jest -t 'HelloComponent should render component correctly with Joe'` and therefore the first test in the `hello-component.spec.ts` file. Strangely this test passes!
