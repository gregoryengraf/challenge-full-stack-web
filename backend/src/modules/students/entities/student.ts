export interface IStudentProps {
  id: string;
  name: string;
  email: string;
  ra: string;
  cpf: string;
  created_at: Date;
}

export class Student {
  private props: IStudentProps;

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get ra() {
    return this.props.ra;
  }

  get cpf() {
    return this.props.cpf;
  }

  constructor(props: IStudentProps) {
    this.props = props;
  }
}
