---
layout: page
title: Great Developer Habits
---
# Great Developer Habits

{% include_relative BeforeEachFile.md %}

## Organize

- Use groups that mirros the file system (automatic since Xcode 9)
- Use multiple storyboards for each section of the app
- Use the new build system (necessary for Swift Packages)
- Zero Warnings. Treat them as errors. Do not push to source control with warnings.

## Track

- Use source control
- Write useful commit messages
- Run branches for bugs and features (my note: like git flow)
- Keep commits small and isolated

## Document

- Comments and Documentation
- Code doesn't convey why or rationale behind approach taken
- Decision taken at the beginning of the project might be very different from at the end
- Use clear variable names
- Doc Stub. Place cursor at the first line of the function signature ⌥⌘/ and fill in the blanks. Uses native popup that is used in SDK and Standard Library

## Test

[Only about Unit Test]

- Even for simple code it is fail-safing for the future
- Run tests before each commit
- Key for CI

## Analyze

- Use the Network Link Conditioner
- Use sanitizers (Address -> memory erros | Thread ->data races | Undefined -> /0, floating point, pointers | Main Thread -> UI on background threads) Minimal performance impact, leave them enabled
- Look at debug gauges
- Profiler in Instrument. Use Time Profiler.

## Evaluate

- Code Reviews - There is often a better way, two pair of eyes is better than one
How to:
- Understand each change, don't skim.
- Build a project and run it, especially if last commit is a merge
- Run tests
- Read comments and docs
- Read spelling errors
- Consistency with UK and US Engligh


## Decouple

- Use shared frameworks to share code between your apps
- Use them to break apart your codebase
- They reduce binary size

## Dependencies

- Check your dependency for tracking
- Including dependency with dependencies increases the risk
- Have a plan for dependency deprecation (Swap out, bring it in house, fix bugs yourself)



Source:
[Great Developer Habits](https://developer.apple.com/wwdc19/239)