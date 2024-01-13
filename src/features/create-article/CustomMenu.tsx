import type { FC } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, memo } from 'react';
import useFormDatatStore from '@/zustand/FormStore/useFormDatatStore';
import Image from 'next/image';

type Props = {
    label: string;
    filters: Readonly<Category[]>;
}

const CustomMenu: FC<Props> = ({ label, filters }) => {

    const category = useFormDatatStore(state => state.formData.category);
    const setFormData = useFormDatatStore(state => state.setFormData);

    const handleChange = (value: Category) => {
        setFormData('category', value);
    }

    return (
        <div className='relative flex flex-col items-center justify-start w-full gap-2.5'>
            <label className='w-full font-extrabold text-gray-100' htmlFor={label}>
                {label}            
            </label>
            <Menu as='div' className='relative self-start xs:min-w-[400px] w-fit'>
                <div>
                    <Menu.Button className='inline-flex items-center justify-between w-full gap-4 p-4 h-[60px] text-base capitalize rounded-md outline-none bg-light-white-100'>                     
                        {category.length !==0 ? (
                            <span className='text-lg font-semibold'>
                                {category}
                            </span>
                        ) : (
                            <span className='text-gray-100/60'>
                                Select a category
                            </span>
                        )}                        
                        <Image
                            src='/arrow-down.svg'
                            width={10}
                            height={5}
                            alt='Arrow down'
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter='transition ease-out duration-[50ms]'
                    enterFrom='opacity-0 scale-90'
                    enterTo='opacity-100 scale-100'
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-[0.85]'
                >
                    <Menu.Items className='absolute left-0 origin-top flex-col mt-2 overflow-y-auto bg-white border max-h-64 rounded-xl border-nav-border shadow-menu'>
                        {
                            filters.map((tag) => (
                                <Menu.Item key={tag}>
                                    <button className='self-start w-full px-5 py-3 text-lg text-left capitalize hover:bg-light-white-100 whitespace-nowrap' type='button' value={tag} onClick={(e) => handleChange(e.currentTarget.value as Category)}>
                                        {tag}
                                    </button>
                                </Menu.Item>
                            ))
                        }
                    </Menu.Items>
                </Transition>                
            </Menu>
        </div>
    );
}

export default memo(CustomMenu);