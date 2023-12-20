import { mount, StartClient } from "solid-start/entry-client";
import { animate, inView, stagger } from "motion";
//inView("section", ({ target }) => {
//  animate(target,
//    {
//      opacity: [0, 1],
//      x: [100, 0]
//    },
//    {
//      duration: 0.3,
//    }
//  )
//  return (leave) => animate(leave.target, {
//    opacity: [1, 0],
//    x: [0, 100]
//  })
//})
inView(".slide", ({ target }) => {
  animate(target,
    {
      opacity: [0, 1],
    },
    {
      duration: .5,
      delay: .2,
    }
  )
  return (leave) => animate(leave.target, {
    opacity: [1, 0],
  })
})


inView("#animate", ({ target }) => {
  animate(target,
    {
      opacity: [0, 1],
      x: [100, 0]
    },
    {
      duration: 0.6,
      delay: stagger(1),
    }
  )
  return (leave) => animate(leave.target, {
    opacity: [1, 0],
    x: [0, 100]
  })
})
mount(() => <StartClient />, document);
