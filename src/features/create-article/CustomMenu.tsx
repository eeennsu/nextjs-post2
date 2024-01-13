import type { FC } from 'react';
import type { CateogryFilter } from '@/constants';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, memo } from 'react';
import useFormDatatStore from '@/zustand/FormStore/useFormDatatStore';
import Image from 'next/image';

type Props = {
    label: string;
    filters: Readonly<CateogryFilter[]>;
}

const CustomMenu: FC<Props> = ({ label, filters }) => {

    const category = useFormDatatStore(state => state.formData.category);
    const setFormData = useFormDatatStore(state => state.setFormData);

    const handleChange = (value: CateogryFilter) => {
        setFormData('category', value);
    }

    return (
        <div className='relative flex flex-col items-center justify-start w-full gap-2.5'>
            <label className='w-full font-extrabold text-gray-100' htmlFor={label}>
                {label}            
            </label>
            <Menu as='div' className='relative self-start xs:min-w-72 w-fit'>
                <div>
                    <Menu.Button className='inline-flex items-center justify-between w-full gap-4 p-4 text-base capitalize rounded-md outline-none bg-light-white-100'>
                        <span className='text-opacity-60'>
                            {category.length !==0 ? category : 'Select a category'}
                        </span>
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
                                    <button className='self-start w-full px-5 py-2 text-sm text-left capitalize hover:bg-light-white-100 whitespace-nowrap' value={tag} onClick={() => handleChange(tag)}>
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