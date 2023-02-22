import React from 'react'

const commentsData = [
    {
        name: '@jitendra',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra nulla non nunc euismod sodales. Donec rhoncus ex a velit vestibulum, ac blandit ligula congue.',
        reply: [
            {
                name: '@sanket',
                comment: 'Sed nec placerat tortor, quis auctor ex. Vivamus malesuada eget ipsum et commodo. In rhoncus dictum orci vitae scelerisque. Integer mollis orci odio, eu sollicitudin velit elementum nec. Donec a suscipit arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum urna cursus, rutrum leo non, porttitor leo.',
                reply: [
                    {
                        name: '@Tosh',
                        comment: 'Sed nec placerat tortor, quis auctor ex. Vivamus malesuada eget ipsum et commodo. In rhoncus dictum orci vitae scelerisque. Integer mollis orci odio, eu sollicitudin velit elementum nec. Donec a suscipit arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum urna cursus, rutrum leo non, porttitor leo.',
                        reply: []
                    }
                ]
            },
            {
                name: '@Akhil',
                comment: 'Sed nec placerat tortor, quis auctor ex. Vivamus malesuada eget ipsum et commodo. In rhoncus dictum orci vitae scelerisque. Integer mollis orci odio, eu sollicitudin velit elementum nec. Donec a suscipit arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum urna cursus, rutrum leo non, porttitor leo.',
                reply: [
                    {
                        name: '@sanket',
                        comment: 'Sed nec placerat tortor, quis auctor ex. Vivamus malesuada eget ipsum et commodo. In rhoncus dictum orci vitae scelerisque. Integer mollis orci odio, eu sollicitudin velit elementum nec. Donec a suscipit arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum urna cursus, rutrum leo non, porttitor leo.',
                        reply: []
                    }
                ]
            }
        ]
    },
    {
        name: '@jitendra',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra nulla non nunc euismod sodales. Donec rhoncus ex a velit vestibulum, ac blandit ligula congue.',
        reply: []
    },
    {
        name: '@jitendra',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra nulla non nunc euismod sodales. Donec rhoncus ex a velit vestibulum, ac blandit ligula congue.',
        reply: [
            {
                name: '@jitendra',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra nulla non nunc euismod sodales. Donec rhoncus ex a velit vestibulum, ac blandit ligula congue.',
                reply: [
                    {
                        name: '@jitendra',
                        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra nulla non nunc euismod sodales. Donec rhoncus ex a velit vestibulum, ac blandit ligula congue.',
                        reply: [
                            {
                                name: '@jitendra',
                                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra nulla non nunc euismod sodales. Donec rhoncus ex a velit vestibulum, ac blandit ligula congue.',
                                reply: [
                                    {
                                        name: '@jitendra',
                                        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra nulla non nunc euismod sodales. Donec rhoncus ex a velit vestibulum, ac blandit ligula congue.',
                                        reply: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: '@jitendra',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra nulla non nunc euismod sodales. Donec rhoncus ex a velit vestibulum, ac blandit ligula congue.',
        reply: [
            {
                name: '@jitendra',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra nulla non nunc euismod sodales. Donec rhoncus ex a velit vestibulum, ac blandit ligula congue.',
                reply: []
            }
        ]
    },
    {
        name: '@jitendra',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra nulla non nunc euismod sodales. Donec rhoncus ex a velit vestibulum, ac blandit ligula congue.',
        reply: []
    },
];

const Comment = ({ data }) => {
    const { name, comment } = data;
    return (
        <div className='flex bg-[#292828] rounded m-2 h-auto p-2'>
            <span className="material-symbols-sharp font-bold text-white text-5xl">
                account_circle
            </span>
            <div className='ml-2 font-medium text-sm'>
                <p>{name}</p>
                <p>{comment}</p>
            </div>
        </div>
    )
}

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => {
        return (
            <>
                <Comment key={index} data={comment} />
                <div className='pl-10 border-l-[1px]'>
                    <CommentsList comments={comment.reply} />
                </div>
            </>
        )
    })
}

const Comments = () => {
    return (
        <div className='p-6 border-0'>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default Comments
