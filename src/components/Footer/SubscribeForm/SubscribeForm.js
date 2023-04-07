import useWindowDimensions from '../../../hooks/useWindowDimensions';
import {
  SubscribeFormWrap,
  TextBeforeSubscribe,
  Title,
  Text,
  Form,
  Field,
  Input,
  Button,
} from './SubscribeForm.styled';

const SubscribeForm = () => {
  const { width } = useWindowDimensions();
  return (
    <SubscribeFormWrap>
      {width > 1440 && <TextBeforeSubscribe>
        <Title>Subscribe to our Newsletter</Title>
        <Text>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </Text>
      </TextBeforeSubscribe>}
      <Form>
        <Field>
          <Input
            type="text"
            email="email"
            placeholder="Enter your email address"
            required
          />
        </Field>
        <Button type="submit">Subscribe</Button>
      </Form>
    </SubscribeFormWrap>
  );
};

export default SubscribeForm;
