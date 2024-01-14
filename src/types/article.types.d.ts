type Category =  'Frontend' | 'Backend' | 'Full-Stack' | 'Mobile' | 'UI/UX' | 'Game Dev' | 'DevOps' | 'Data Science' | 'Machine Learning' | 'Cybersecurity' | 'Blockchain' | 'E-commerce' | 'Chatbots';

type Form = {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;  
    category: Category | '';
}

type Article = Form & {
    _id: string;
    createdBy: NewUser;
}