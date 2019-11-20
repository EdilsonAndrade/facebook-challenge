import React, { Component } from 'react';
import Post from './Post';
import Comment from './CommentsList';
import './PostList.css';

import Julio from '../../assets/julio.svg'
import Diego from '../../assets/diego.svg'
import Gabriel from '../../assets/gabriel.svg'
import Clara from '../../assets/clara.svg'
import Cesar from '../../assets/cesar.svg'
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: Julio
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: Diego
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: Gabriel
        },
        date: "12 Jun 2019",
        content: "Fala galera, beleza? \n \n Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 2,
            author: {
              name: "Jenifer Dartihitsen",
              avatar: Clara
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 3,
            author: {
              name: "Cézar Toledo ",
              avatar: Cesar
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Diego Fernandes",
          avatar: Diego
        },
        date: "19 Novembro 2019",
        content: "Pessoal, quem aqui vai participar do Rocketseat Experience dia 25 a 27, o Edilson Andrade confirmou presença",
        comments: [
          {
            id: 1,
            author: {
              name: "Julio Alcantara",
              avatar: Julio
            },
            content: "Caaraaaaba meu, se o Edilson Andrade estará presente,certeza que estarei!!! Bora CODAR!"
          }
        ]
      },
    ]
  }

  render() {
    return (
      <div className="content">
        {
          this.state.posts.map(post => (
            <div className="postList" key={post.id}>
              <Post key={post.id} post={post} />
              {
                post.comments.map(comment => (
                  <Comment key={comment.id} comment={comment} />
                ))
              }

            </div>

          ))
        }

      </div>

    )
  }
}

export default PostList;