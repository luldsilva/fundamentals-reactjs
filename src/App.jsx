import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/luldsilva.png",
      name: "Lucas Li Silva",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa ð" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-11"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Rocketseat.png",
      name: "Rocketseat",
      role: "Boosting people",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa ð" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ðAcabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-10"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
