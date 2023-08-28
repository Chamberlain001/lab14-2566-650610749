"use client";
import { Footer } from "@/components/Footer";
import {
  Container,
  Text,
  Title,
  Rating,
  Textarea,
  Button,
  Group,
  Divider,
  Stack,
  Pagination,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">
        Your rating
      </Title>

      <Rating size="lg" defaultValue={5} />

      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      />

      <Button color="orange" mt="xs">
        Submit Review
      </Button>

      <Divider mt="sm" />

      <Group position="center" mt="sm">
        <Title order={4}>Elon Musk</Title>
        <Rating fractions={2} size="sm" value={5} readOnly />
      </Group>
      <Text align="center" c="dimmed">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider mt="sm" />

      <Group position="center" mt="sm">
        <Title order={4}>Mark Zuck</Title>
        <Rating fractions={2} size="sm" value={4} readOnly />
      </Group>
      <Text align="center" c="dimmed">
        My favourite part is pepperoni
      </Text>

      <Pagination total={20} mt="md" position="center" color="orange" />

      <Text align="center" c="dimmed" mt="sm">
        <Footer madeBy="Chayanin Suatap 650610560" />
      </Text>
    </Container>
  );
}
