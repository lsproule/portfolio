
int main(void) {
  FILE *fp;
  size_t ret;
  unsigned char buffer[4];

  fp = fopen("/bin/sh", "rb");
  if (!fp) {
    perror("fopen");
    return EXIT_FAILURE;
  }

  ret = fread(buffer, sizeof(*buffer), ARRAY_SIZE(buffer), fp);
  if (ret != ARRAY_SIZE(buffer)) {
    fprintf(stderr, "fread() failed: %zu\n", ret);
    exit(EXIT_FAILURE);
  }

  printf("ELF magic: %#04x%02x%02x%02x\n", buffer[0], buffer[1], buffer[2],
         buffer[3]);

  ret = fread(buffer, 1, 1, fp);
  if (ret != 1) {
    fprintf(stderr, "fread() failed: %zu\n", ret);
    exit(EXIT_FAILURE);
  }

  printf("Class: %#04x\n", buffer[0]);

  fclose(fp);

  exit(EXIT_SUCCESS);
}
