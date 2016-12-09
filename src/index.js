var converter = new Showdown.converter();
var Comment = React.createClass({
   render: function () {
       return (
         <div className="comment">
             <h2 className="commentAuthor">
                 {this.props.author}
             </h2>
             {converter.makeHtml(this.props.children.toString())}
         </div>

       );
   }
});

var  CommentList = React.createClass({
    render: function () {
        var  commentNodes = this.props.data.map(function(comment){
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return (
          <div className="ommentList">
              {commentNodes}
          </div>
        );
    }
});



var CommentForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.refs.author.getDOMNode().value.trim();
        var text = this.refs.text.getDOMNode().value.trim();
        if (!text || !author) {
            return;
        }
        alert(this.refs.author);
        // TODO: send request to the server
        this.refs.author.getDOMNode().value = '';
        this.refs.text.getDOMNode().value = '';
        return;
    },
    render:function () {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
               <input type="text" placeholder="Your name" ref="author" />
                <input type="text" placeholder="Say something..." ref="text"/>
                <input type="submit" value="post"/>
            </form>
        );
    }
});


var CommentBox = React.createClass({
    // getInitialState:function () {
    //   return {data:[]};
    // },
    // componentDidMount:function () {
    //   $.ajax({
    //       url: this.props.url,
    //       dataType:'json',
    //       success:function (data) {
    //           this.setState({data:data});
    //       }.bind(this),
    //       error:function (xhr, status, err) {
    //           console.error(this.props.url,status,err.toString());
    //       }.bind(this)
    //   })  ;
    // },
    render : function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm/>
            </div>
        );
    }
});
var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];
React.render(
    <CommentBox data={data}/>,
    document.getElementById('example')
);